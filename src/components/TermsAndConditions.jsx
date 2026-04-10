import React, { useState } from 'react';
import { ChevronDown, Info, ShieldAlert, CalendarX2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsAndConditions = () => {
  const [openSection, setOpenSection] = useState('terms'); // 'terms', 'cancellation', or null

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const terms = [
    "Check-in after 2 PM and Check-out before 11 AM.",
    "An additional charge of 1,000/- per person is charged for guests above the limit.",
    "Security deposit of Rs.5,000/- has to be paid which will be refunded at the time of check-out.",
    "Svaasa Staycations strictly does not serve any liquor on the premises.",
    "Only guests with room booking are allowed into the premises.",
    "Any damage to the property will be charged to the customer.",
    "Children are to be supervised near the water body area.",
    "Svaasa Staycations does not tolerate abusive behaviour towards staff at any times during the stay.",
    "Svaasa Staycations is against substance abuse and prohibits possession or consumption of drugs and marijuana.",
    "Svaasa Staycations is not responsible for any legal issues caused due to guest's activities.",
    "Alcohol consumption is allowed at the properties but guests should have valid permission. DJ's are only permitted with valid permission from local authorities.",
    "Svaasa Staycations is not responsible for loss of belongings of the guest.",
    "Please uphold cleanliness standards during your stay. Excessive food spillage, vomitings, or unclean activities may incur additional cleaning charges.",
    "An additional fee of 1,000/- applies for bonfire wood (2-3 hrs). Gas is charged at 500/- and OLD TOWN kitchen is charged at 1,000/-. Guests are also encouraged to bring their own coal for BBQ. Please remember to carry personal essentials, including water bottles and use-and-throw items.",
    "An additional fee of 1,000/- per steward for the night will apply if services are required during nighttime hours. (optional, only if you want this service)",
    "In the event of cancellation, the advance payment is subject to the cancellation policy as detailed in the booking confirmation. Refunds, if applicable, will be processed according to the terms of the cancellation policy.",
    "Please note that certain promotional rates or special offers may require non-refundable deposits."
  ];

  const cancellations = [
    "Advance payments will not be refunded for cancellations made within 15 days of the booking date, under any circumstances.",
    "Requests to change booking dates are subject to availability. Rescheduling charges may apply based on the new date and proximity to the original booking.",
    "For eligible cancellations (before the 15-day period), refunds will be processed to the original payment method."
  ];

  return (
    <div className="">
      <h3 className="text-3xl font-header font-black text-white mb-10 border-b border-white/20 pb-4 inline-block tracking-widest">
        Policies & Guidelines
      </h3>
      
      <div className="space-y-6">
        {/* Terms Accordion */}
        <div className="border border-white/10 rounded-2xl bg-svaasa-card overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <button 
            onClick={() => toggleSection('terms')}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center space-x-6">
              <div className="p-3 bg-white/10 rounded-full text-white border border-white/5">
                <Info size={24} />
              </div>
              <h4 className="text-xl font-header font-black tracking-widest text-white">Terms & Conditions</h4>
            </div>
            <motion.div animate={{ rotate: openSection === 'terms' ? 180 : 0 }}>
              <ChevronDown className="text-white/60" size={24} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openSection === 'terms' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-0 md:p-10 md:pt-4 border-t border-white/5">
                  <ul className="space-y-6 mt-4">
                    {terms.map((term, idx) => (
                      <li key={idx} className="flex items-start space-x-4 text-svaasa-gray font-light text-lg">
                        <span className="text-white mt-1 flex-shrink-0">›</span>
                        <span className="leading-relaxed">{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cancellation Accordion */}
        <div className="border border-white/10 rounded-2xl bg-svaasa-card overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <button 
            onClick={() => toggleSection('cancellation')}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center space-x-6">
              <div className="p-3 bg-white/10 rounded-full text-white border border-white/5">
                <CalendarX2 size={24} />
              </div>
              <h4 className="text-xl font-header font-black tracking-widest text-white">Cancellation Policy</h4>
            </div>
            <motion.div animate={{ rotate: openSection === 'cancellation' ? 180 : 0 }}>
              <ChevronDown className="text-white/60" size={24} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openSection === 'cancellation' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-0 md:p-10 md:pt-4 border-t border-white/5">
                  <div className="flex items-start space-x-4 mt-6 mb-8 p-6 bg-red-500/10 text-red-200 rounded-2xl border border-red-500/20 shadow-inner">
                    <ShieldAlert size={28} className="flex-shrink-0 mt-0.5" />
                    <p className="font-sans font-medium text-sm md:text-base leading-relaxed">
                      Tracking: Please read our cancellation policy carefully before finalizing your booking. By booking, you agree to these terms.
                    </p>
                  </div>
                  <ul className="space-y-6">
                    {cancellations.map((policy, idx) => (
                      <li key={idx} className="flex items-start space-x-4 text-svaasa-gray font-light text-lg">
                        <span className="text-white mt-1 flex-shrink-0">›</span>
                        <span className="leading-relaxed">{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
