import React, { useEffect, useState } from 'react';
import { conf, storage, databases, ID } from '../../../appwrite/config';
import { Image as ImageIcon, Upload, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const InspireManager = () => {
  const [inspire, setInspire] = useState(null);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  useEffect(() => {
    fetchInspire();
  }, []);

  const fetchInspire = async () => {
    try {
      const res = await databases.listDocuments(conf.databaseId, conf.inspireCollectionId);
      if (res.documents.length > 0) {
        setInspire(res.documents[0]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setStatus({ type: '', msg: '' });
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setStatus({ type: 'info', msg: 'Uploading image...' });

    try {
      // 1. Upload to storage
      const uploadedFile = await storage.createFile(conf.bucketId, ID.unique(), file);
      const fileId = uploadedFile.$id;

      // 2. Update database
      if (inspire) {
        await databases.updateDocument(
          conf.databaseId, 
          conf.inspireCollectionId, 
          inspire.$id, 
          { imageId: fileId }
        );
      } else {
        // Create if doesn't exist
        const newDoc = await databases.createDocument(
          conf.databaseId, 
          conf.inspireCollectionId, 
          ID.unique(), 
          { imageId: fileId }
        );
        setInspire(newDoc);
      }

      setStatus({ type: 'success', msg: 'Inspire image updated successfully!' });
      setFile(null);
      setPreview(null);
      fetchInspire();
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Upload failed' });
    } finally {
      setUploading(false);
    }
  };

  const getImageUrl = (fileId) => {
    if (!fileId) return null;
    return `${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${conf.bucketId}/files/${fileId}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}&mode=admin`;
  };


  if (loading) return <div className="text-gray-400 animate-pulse uppercase tracking-widest text-xs font-bold">Loading...</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase italic tracking-tighter">Inspire <span className="text-accent">Section</span></h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Manage the primary display image in the about section</p>
        </div>
        <ImageIcon className="text-accent w-10 h-10 opacity-20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Current Image */}
        <div className="space-y-4">
          <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest underline decoration-accent underline-offset-4 mb-6">Current Image</label>
          <div className="bg-secondary border border-white/5 p-2 aspect-[4/3] relative group overflow-hidden">
            {inspire?.imageId ? (
                <img 
                  src={getImageUrl(inspire.imageId)} 
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/hero1.jpg"; }} 
                  alt="Current Inspire" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />

            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-primary/50 border border-dashed border-white/10">
                <ImageIcon className="w-12 h-12 mb-2 opacity-10" />
                <span className="text-[10px] uppercase font-bold tracking-widest">No image set</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Upload New */}
        <div className="space-y-4">
          <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest underline decoration-accent underline-offset-4 mb-6">Change Image</label>
          
          <div className="bg-secondary border border-white/5 p-8 space-y-6">
            <div 
              onClick={() => document.getElementById('fileInput').click()}
              className="border-2 border-dashed border-white/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 p-12 text-center cursor-pointer relative overflow-hidden"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              ) : null}
              
              <div className="relative z-10 flex flex-col items-center">
                <Upload className={`w-12 h-12 mb-4 transition-transform ${preview ? 'scale-75' : 'text-gray-600'}`} />
                <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">{preview ? 'Change Selection' : 'Click to Browse'}</p>
                <p className="text-gray-600 text-[10px] mt-2 italic">JPG, PNG or WEBP (MAX 2MB)</p>
              </div>
              <input 
                id="fileInput"
                type="file" 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
              />
            </div>

            {status.msg && (
              <div className={`p-4 flex items-center gap-3 text-xs font-bold uppercase tracking-widest border ${
                status.type === 'error' ? 'bg-red-500/10 border-red-500/50 text-red-500' : 
                status.type === 'success' ? 'bg-accent/10 border-accent/50 text-accent' : 
                'bg-blue-500/10 border-blue-500/50 text-blue-400'
              }`}>
                {status.type === 'error' ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                {status.msg}
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full bg-accent text-primary px-6 py-4 font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed box-glow-hover flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : 'Confirm Update'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InspireManager;
