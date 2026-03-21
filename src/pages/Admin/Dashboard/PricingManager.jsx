import React, { useEffect, useState } from 'react';
import { conf, databases, ID } from '../../../appwrite/config';
import { Plus, Edit2, Trash2, X, Save, AlertCircle, CheckCircle2, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingManager = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    planname: '',
    price: '',
    highlighted: false,
    features: ['']
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await databases.listDocuments(conf.databaseId, conf.pricingCollectionId);
      setPlans(res.documents);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      planname: '',
      price: '',
      highlighted: false,
      features: ['']
    });
    setEditingId(null);
  };

  const handleEdit = (plan) => {
    setFormData({
      planname: plan.planname || plan.name || '',
      price: plan.price || '',
      highlighted: plan.highlighted || false,
      features: plan.features && plan.features.length > 0 ? plan.features : ['']
    });
    setEditingId(plan.$id);
    setShowModal(true);
  };


  const handleDelete = async (id) => {
    if (!window.confirm('Delete this plan?')) return;
    try {
      await databases.deleteDocument(conf.databaseId, conf.pricingCollectionId, id);
      fetchPlans();
    } catch (err) {
      alert(err.message);
    }
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures.length > 0 ? newFeatures : [''] });
  };

  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    // Clean features: remove empty ones
    const cleanFeatures = formData.features.filter(f => f.trim() !== '');

    try {
      // Use planname for the database
      const payload = { 
        planname: formData.planname || '',
        price: formData.price || '',
        highlighted: !!formData.highlighted,
        features: cleanFeatures 
      };

      console.log("Submitting Pricing Payload:", payload);

      if (editingId) {
        await databases.updateDocument(conf.databaseId, conf.pricingCollectionId, editingId, payload);
      } else {
        await databases.createDocument(conf.databaseId, conf.pricingCollectionId, ID.unique(), payload);
      }


      setShowModal(false);
      resetForm();
      fetchPlans();
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };


  if (loading) return <div className="text-gray-400 animate-pulse font-bold tracking-widest text-xs uppercase">Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase italic tracking-tighter">Pricing <span className="text-accent">Model</span></h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Manage membership packages and features</p>
        </div>
        <button 
          onClick={() => { resetForm(); setShowModal(true); }}
          className="bg-accent text-primary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 flex items-center gap-2 box-glow-hover"
        >
          <Plus className="w-4 h-4" /> Add Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div 
            layout
            key={plan.$id}
            className={`p-1 relative group bg-secondary border border-white/5 transition-all duration-500 hover:border-accent ${plan.highlighted ? 'border-accent/40 bg-accent/5' : ''}`}
          >
            {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-accent text-primary text-[10px] px-4 py-1 font-bold uppercase tracking-widest">Highlighted</span>
                </div>
            )}
            
            <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-heading font-bold uppercase tracking-tighter italic">{plan.planname || plan.name}</h3>
                        <p className="text-accent text-2xl font-black mt-2">{plan.price}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => handleEdit(plan)} className="p-2 bg-white/5 text-gray-400 hover:text-accent transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(plan.$id)} className="p-2 bg-white/5 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="space-y-3">
                    {plan.features?.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
                            <CheckCircle2 className="w-3 h-3 text-accent/50" />
                            <span className="truncate">{feature}</span>
                        </div>
                    ))}
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
              className="absolute inset-0 bg-primary/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-secondary border border-white/10 w-full max-w-xl z-10 overflow-hidden"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-xl font-heading font-bold uppercase tracking-widest italic">{editingId ? 'Edit' : 'Create'} <span className="text-accent">Pricing Plan</span></h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-white"><X className="w-6 h-6" /></button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Plan Name</label>
                    <input 
                      required
                      value={formData.planname}
                      onChange={(e) => setFormData({...formData, planname: e.target.value})}
                      className="w-full bg-primary border border-white/10 p-4 text-white outline-none focus:border-accent"
                      placeholder="e.g. 1 MONTH"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Price Tag</label>
                    <input 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full bg-primary border border-white/10 p-4 text-white outline-none focus:border-accent"
                      placeholder="e.g. ₹5,000"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={formData.highlighted}
                                onChange={(e) => setFormData({...formData, highlighted: e.target.checked})}
                                className="sr-only peer" 
                            />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent peer-checked:after:bg-primary peer-checked:after:border-primary"></div>
                        </label>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Highlight Plan</span>
                    </div>


                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Plan Features</label>
                    <button type="button" onClick={addFeature} className="text-accent hover:text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Add Row
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 text-gray-700 italic text-[10px]">{index + 1}</div>
                        <input 
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="flex-1 bg-primary border border-white/5 p-3 text-xs text-white outline-none focus:border-accent"
                          placeholder="What's included?"
                        />
                        <button type="button" onClick={() => removeFeature(index)} className="text-gray-600 hover:text-red-500 p-2"><X className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button 
                    disabled={saving}
                    className="w-full bg-accent text-primary py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-300 disabled:opacity-50 box-glow-hover flex items-center justify-center gap-2"
                  >
                    {saving ? 'Processing...' : 'Deploy Changes'}
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

export default PricingManager;
