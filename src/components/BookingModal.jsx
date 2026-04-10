import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Briefcase, User, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, propertyName }) => {
  const [isPropDropdownOpen, setIsPropDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    guestName: '',
    checkInDate: '',
    checkOutDate: '',
    numGuests: '',
    eventName: '',
    propertyName: propertyName || 'The Old Town' // Default to prop or 'The Old Town'
  });

  // Update property name if prop changes
  React.useEffect(() => {
    if (propertyName) {
      setFormData(prev => ({ ...prev, propertyName }));
    }
  }, [propertyName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.guestName || !formData.checkInDate || !formData.checkOutDate || !formData.numGuests) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format message for WhatsApp
    const message = `Hello! I'd like to book a stay at ${formData.propertyName}.
    
Guest Name: ${formData.guestName}
Check-in Date: ${formData.checkInDate}
Check-out Date: ${formData.checkOutDate}
No. of Guests: ${formData.numGuests}
Event Name: ${formData.eventName || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919019118384?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-svaasa-card border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-header font-black text-svaasa-brand tracking-tight">
                  Book Your Stay
                </h3>
                <p className="text-svaasa-gray text-sm mt-1 font-light italic">
                  At {propertyName}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-5">
              {/* Property Selection */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-1">Property</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-svaasa-brand/50 z-10" size={18} />
                  
                  {/* Custom Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsPropDropdownOpen(!isPropDropdownOpen)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-white text-left focus:outline-none focus:border-svaasa-brand/50 focus:bg-white/10 transition-all font-light flex items-center justify-between"
                    >
                      <span className="truncate">{formData.propertyName}</span>
                      <motion.div
                        animate={{ rotate: isPropDropdownOpen ? 180 : 0 }}
                        className="text-white/30"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isPropDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A20] border border-white/10 rounded-2xl overflow-hidden z-[110] shadow-2xl backdrop-blur-xl"
                        >
                          {['The Old Town', 'The Lotus Bliss'].map((prop) => (
                            <button
                              key={prop}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, propertyName: prop }));
                                setIsPropDropdownOpen(false);
                              }}
                              className={`w-full px-6 py-4 text-left transition-colors flex items-center space-x-3 ${
                                formData.propertyName === prop 
                                ? 'bg-svaasa-brand text-black font-bold' 
                                : 'text-white hover:bg-white/5'
                              }`}
                            >
                              <span>{prop}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Guest Name */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-1">Guest Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-svaasa-brand/50" size={18} />
                  <input
                    required
                    type="text"
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-svaasa-brand/50 focus:bg-white/10 transition-all font-light"
                  />
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-1">Check-in Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-svaasa-brand/50" size={18} />
                    <input
                      required
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-svaasa-brand/50 focus:bg-white/10 transition-all font-light appearance-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-1">Check-out Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-svaasa-brand/50" size={18} />
                    <input
                      required
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-svaasa-brand/50 focus:bg-white/10 transition-all font-light appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Guests and Event */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-1">No. of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-svaasa-brand/50" size={18} />
                    <input
                      required
                      type="number"
                      name="numGuests"
                      value={formData.numGuests}
                      onChange={handleChange}
                      placeholder="e.g. 15"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-svaasa-brand/50 focus:bg-white/10 transition-all font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-1">Event Name (If any)</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-svaasa-brand/50" size={18} />
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      placeholder="e.g. Birthday"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-svaasa-brand/50 focus:bg-white/10 transition-all font-light"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-svaasa-brand text-black py-5 rounded-2xl font-black tracking-widest uppercase hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(178,228,138,0.2)] flex items-center justify-center space-x-3"
              >
                <span>BOOK NOW ON WHATSAPP</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
