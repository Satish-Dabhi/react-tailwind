import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import emailjs from 'emailjs-com';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    investment: '100k',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate full name (only letters)
    if (name === 'fullName') {
      const isValid = /^[A-Za-z\s]*$/.test(value);
      setErrors({ ...errors, fullName: isValid ? '' : 'Only alphabets are allowed' });
    }

    // Validate phone number (only digits)
    if (name === 'phone') {
      const isValid = /^\d*$/.test(value);
      setErrors({ ...errors, phone: isValid ? '' : 'Only numbers are allowed' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submission
    if (!errors.fullName && !errors.phone) {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_name: 'Recipient Name', // Replace with actual recipient name or use dynamic value
        from_name: formData.fullName, // Use full name from form data
        email_Id: formData.email, // Use email from form data
        message: `Phone: ${formData.phone}\nOrganization: ${formData.organization}\nInvestment: ${formData.investment}`, // Compose message using other form fields
      };

      // Send email with form data using EmailJS
      emailjs.send('service_2q8uhxr', 'template_e5tqujz', templateParams, 'PJg6fdy1esCaTjljZ')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          // Log form data
          console.log('Form Data:', formData);
          // Optionally, reset the form after submission
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            organization: '',
            investment: '100k',
          });
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
    }
  };

  // Animation for the form container
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center transform transition-all duration-500 hover:shadow-2xl">
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
            INVEST WITH EPIIDOSIS INVESTMENTS LLC
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Expect substantial returns on your initial investment. Our team of seasoned professionals analyzes opportunities, manages risks, and maximizes returns for our clients. Invest with confidence.
          </p>
        </div>
        <animated.div
          style={formAnimation}
          className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transform transition-all duration-500 hover:shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded`}
                required
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder="+"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Organization:</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Initial Desired Investment (AED):</label>
              <select
                name="investment"
                value={formData.investment}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              >
                <option value="100k">100k</option>
                <option value="100-500k">100-500k</option>
                <option value="500k-1m">500k – 1 million</option>
                <option value="1m+">1 million and above</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white p-3 rounded hover:bg-blue-900 transition duration-300 transform hover:scale-105"
              disabled={!!errors.fullName || !!errors.phone}
            >
              Submit
            </button>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default LeadForm;
