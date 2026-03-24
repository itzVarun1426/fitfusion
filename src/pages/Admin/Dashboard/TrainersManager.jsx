import React, { useEffect, useState } from 'react';
import { conf, storage, databases, ID } from '../../../appwrite/config';
import { Plus, Edit2, Trash2, X, Upload, Loader2, Save, Trash, UserPlus, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TrainersManager = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    speciality: '',
    experience: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    order: 0,
    imageId: ''
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const res = await databases.listDocuments(conf.databaseId, conf.trainersCollectionId);
      const sorted = res.documents.sort((a, b) => (a.order || 0) - (b.order || 0));
      setTrainers(sorted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      speciality: '',
      experience: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      order: trainers.length,
      imageId: ''
    });
    setFile(null);
    setPreview(null);
    setEditingId(null);
  };

  const handleEdit = (trainer) => {
    setFormData({
      name: trainer.name,
      speciality: trainer.speciality,
      experience: trainer.experience,
      instagram: trainer.instagram || '',
      twitter: trainer.twitter || '',
      linkedin: trainer.linkedin || '',
      order: trainer.order || 0,
      imageId: trainer.imageId || ''
    });
    setEditingId(trainer.$id);
    if (trainer.imageId) {
      setPreview(`${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${conf.bucketId}/files/${trainer.imageId}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}&mode=admin`);
    }

    setShowModal(true);
  };

  const handleDelete = async (id, imageId) => {
    if (!window.confirm('Delete this trainer?')) return;
    try {
      await databases.deleteDocument(conf.databaseId, conf.trainersCollectionId, id);
      if (imageId) {
        try {
          await storage.deleteFile(conf.bucketId, imageId);
        } catch (e) {
          console.error("Failed to delete image file:", e);
        }
      }
      fetchTrainers();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let finalImageId = formData.imageId;

      // 1. Upload new image if selected
      if (file) {
        const uploadedFile = await storage.createFile(conf.bucketId, ID.unique(), file);
        finalImageId = uploadedFile.$id;
        
        // Delete old image if editing and new image uploaded
        if (editingId && formData.imageId) {
           try { await storage.deleteFile(conf.bucketId, formData.imageId); } catch(e) {}
        }
      }

      const payload = { ...formData, imageId: finalImageId };

      if (editingId) {
        await databases.updateDocument(conf.databaseId, conf.trainersCollectionId, editingId, payload);
      } else {
        await databases.createDocument(conf.databaseId, conf.trainersCollectionId, ID.unique(), payload);
      }

      setShowModal(false);
      resetForm();
      fetchTrainers();
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  const getImageUrl = (fileId) => {
    if (!fileId) return null;
    return `${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${conf.bucketId}/files/${fileId}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}&mode=admin`;
  };


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  if (loading) return <div className="text-gray-400 animate-pulse font-bold tracking-widest text-xs uppercase">Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase italic tracking-tighter">Trainer <span className="text-accent">Roster</span></h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Add, edit or remove elite professionals</p>
        </div>
        <button 
          onClick={() => { resetForm(); setShowModal(true); }}
          className="bg-accent text-primary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 flex items-center gap-2 box-glow-hover"
        >
          <Plus className="w-4 h-4" /> Add Trainer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <motion.div 
            layout
            key={trainer.$id}
            className="bg-secondary border border-white/5 p-6 group transition-all duration-300 hover:border-accent"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 bg-primary overflow-hidden flex-shrink-0 border border-white/5">
                {trainer.imageId ? (
                  <img src={getImageUrl(trainer.imageId)} 
                       onError={(e) => { e.target.onerror = null; e.target.src = "/images/default-trainer.jpg"; }} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700">NA</div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold uppercase tracking-wide truncate">{trainer.name}</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1 truncate">{trainer.speciality}</p>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">EXP: {trainer.experience}</p>
                <div className="flex gap-2 mt-2 opacity-30">
                  {trainer.instagram && <Instagram className="w-3 h-3" />}
                  {trainer.twitter && <Twitter className="w-3 h-3" />}
                  {trainer.linkedin && <Linkedin className="w-3 h-3" />}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Order: {trainer.order}</span>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(trainer)} className="p-2 text-gray-400 hover:text-accent transition-colors"><Edit2 className="w-4 h-4" /></button>
                <button onClick={() => handleDelete(trainer.$id, trainer.imageId)} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-secondary border border-white/10 w-full max-w-2xl z-10 overflow-hidden relative"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-xl font-heading font-bold uppercase tracking-widest italic">{editingId ? 'Edit' : 'Add New'} <span className="text-accent">Trainer</span></h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-white"><X className="w-6 h-6" /></button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Image Upload Area */}
                  <div className="md:col-span-2 flex flex-col items-center">
                    <div 
                      onClick={() => document.getElementById('modalFile').click()}
                      className="w-full h-40 border-2 border-dashed border-white/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer lg:h-64"
                    >
                      {preview ? (
                        <img src={preview} alt="Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="flex flex-col items-center">
                            <Upload className="w-10 h-10 text-gray-600 mb-2" />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Upload Profile Photo</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em]">Change Photo</span>
                      </div>
                      <input id="modalFile" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-primary border border-white/10 p-4 text-white outline-none focus:border-accent"
                      placeholder="e.g. JOHN DOE"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest">Specialty</label>
                    <input 
                      value={formData.speciality}
                      onChange={(e) => setFormData({...formData, speciality: e.target.value})}
                      className="w-full bg-primary border border-white/10 p-4 text-white outline-none focus:border-accent"
                      placeholder="e.g. BODYBUILDING"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest">Experience</label>
                    <input 
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full bg-primary border border-white/10 p-4 text-white outline-none focus:border-accent"
                      placeholder="e.g. 5+ YEARS"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest">Display Order</label>
                    <input 
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({...formData, order: parseInt(e.target.value)})}
                      className="w-full bg-primary border border-white/10 p-4 text-white outline-none focus:border-accent"
                    />
                  </div>

                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-6">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest"><Instagram className="w-3 h-3" /> Instagram</label>
                        <input value={formData.instagram} onChange={(e) => setFormData({...formData, instagram: e.target.value})} className="w-full bg-primary border border-white/5 p-3 text-xs text-white" placeholder="URL" />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest"><Twitter className="w-3 h-3" /> Twitter</label>
                        <input value={formData.twitter} onChange={(e) => setFormData({...formData, twitter: e.target.value})} className="w-full bg-primary border border-white/5 p-3 text-xs text-white" placeholder="URL" />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest"><Linkedin className="w-3 h-3" /> LinkedIn</label>
                        <input value={formData.linkedin} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} className="w-full bg-primary border border-white/5 p-3 text-xs text-white" placeholder="URL" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    disabled={saving}
                    className="w-full bg-accent text-primary py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 box-glow-hover"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {editingId ? 'Update Trainer' : 'Save Trainer'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainersManager;
