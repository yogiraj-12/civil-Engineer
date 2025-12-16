import { BookingData } from '../types';
import { ADMIN_WHATSAPP_NUMBER } from '../constants';

export const sendToWhatsApp = (data: BookingData) => {
  const message = `
*New Consultation Request* 🏗️
---------------------------
*Name:* ${data.name}
*Phone:* ${data.phone}
*Type:* ${data.projectType}
*Location:* ${data.location}

*Requirement:*
${data.message}
---------------------------
Sent from Vastukala Website
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Open in new tab
  window.open(url, '_blank');
};