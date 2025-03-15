import React from 'react';
import { Link } from 'react-router-dom';

export const Terms = () => {
  return (
    <div className='body_white_buy'>
      <div className="terms_and_conditions">
        <div>
        <h1>Terms and Conditions for Newsletter Subscription</h1>
          <h1>1. Introduction</h1>
            <p>These Terms and Conditions govern your subscription to our newsletter service. 
            By subscribing to our newsletter, you accept these Terms and Conditions in full. 
            If you disagree with these Terms and Conditions or any part of them, 
            you should not subscribe to our newsletter.</p>
        <h1>2. Definitions</h1>
            <p>These Terms and Conditions govern your subscription to our newsletter service. 
            By subscribing to our newsletter, you accept these Terms and Conditions in full. 
            If you disagree with these Terms and Conditions or any part of them, 
            you should not subscribe to our newsletter.</p>
        <h1>3. Subscription</h1>
            <p>3.1. By subscribing to our newsletter, you agree to receive periodic communications from us.<br />
            3.2. To subscribe to our newsletter, you must provide a valid email address and any other 
            information requested in the subscription form.<br />
            3.3. We reserve the right to refuse or cancel your subscription at our discretion.</p>
        <h1>4. Personal Data Collection and Use</h1>
            <p>4.1. We collect and process your personal data in accordance with applicable data protection laws.<br />
            4.2. Personal data we collect may include, but is not limited to:<br />
            Your name<br />
            Your email address<br />
            Your location<br />
            Subscription preferences<br />
            4.3. We use your personal data for the following purposes:<br />
            Sending you our newsletter<br />
            Providing you with information about our products, services, offers, and announcements<br />
            Improving our newsletter content<br />
            Analyzing subscription statistics<br />
            4.4. We will not share, sell, rent, or trade your personal information with third parties for their commercial purposes without your explicit consent.<br />
            4.5. We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.</p>
        <h1>5. Marketing Communications</h1>
            <p>5.1. By subscribing to our newsletter, you consent to receive marketing communications from us.<br />
            5.2. Our marketing communications will be limited to our own products, services, offers, and announcements.<br />
            5.3. We will not use your personal information to advertise or promote third-party products or services without your explicit consent.</p>
        <h1>6. Unsubscribing</h1>
            <p>6.1. You can unsubscribe from our newsletter at any time by:<br />
            Clicking the "Unsubscribe" link provided at the bottom of each newsletter<br />
            Contacting us directly with your request to unsubscribe<br />
            6.2. Upon receiving your unsubscribe request, we will promptly remove you from our newsletter distribution list.</p>
        <h1>7. Intellectual Property Rights</h1>
            <p>7.1. All content included in our newsletter, including but not limited to text, graphics, logos, images, and software, is the property of deedisco.com or our content suppliers and is protected by copyright and intellectual property laws.<br />
            7.2. You may not reproduce, modify, distribute, republish, display, post, or transmit any content from our newsletter without our prior written permission.<br />
            7.3. You may print or download extracts from our newsletter for your personal, non-commercial use only.</p>
        <h1>8. Limitation of Liability</h1>
            <p>8.1. The information contained in our newsletter is provided for general information purposes only and does not constitute professional advice.<br />
            8.2. We make no representations or warranties about the accuracy, completeness, or suitability of the information contained in our newsletter.<br />
            8.3. We shall not be liable for any loss or damage, direct or indirect, arising from the use of, or reliance on, the information provided in our newsletter.</p>
        <h1>9. Changes to Terms and Conditions</h1>
            <p>9.1. We reserve the right to modify these Terms and Conditions at any time.<br />
            9.2. Changes to these Terms and Conditions will be effective upon posting the revised version on our website.<br />
            9.3. Your continued subscription to our newsletter following the posting of changes to these Terms and Conditions will be deemed as your acceptance of those changes.</p>
        <h1>10. Governing Law and Jurisdiction</h1>
            <p>10.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of United Kingdom.<br />
            10.2. Any disputes arising under these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of United Kingdom.</p>
        <h1>11. Contact Information</h1>
            <p>If you have any questions about these Terms and Conditions, please contact us at:<br />
            deedisco.com<br />
            deedisco.com@gmail.com</p>
            <p>
            <br />
            <br />
            <br />
            </p>
            <Link to='/like'>
                <div className='nav_links_li'>
                    <button
                        style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        }}>
                        back
                    </button>
                </div>  
            </Link>
            <p>
            <br />
            <br />
            <br />
            </p>
        </div>
      </div>
    </div>  
  );
};

// Alternative export if you're using default exports elsewhere
// export default Terms;