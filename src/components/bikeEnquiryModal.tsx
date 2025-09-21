import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { BikeEnquiryModalProps } from '../schemas/bikeEnquiry';
import { bikeData } from '../data/bikeData';

const BikeEnquiryModal: React.FC<BikeEnquiryModalProps> = ({ isOpen, onClose, bikeDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', number: '', location: '' });
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      messaging_product: 'whatsapp',
      to: `${import.meta.env.VITE_PHONE_NUMBER}`,
      type: 'template',
      template: {
        name: 'sales_enquiry',
        language: { code: 'en' },
        components: [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                parameter_name: 'name',
                text: formData.name,
              },
              {
                type: 'text',
                parameter_name: 'number',
                text: formData.number,
              },
              {
                type: 'text',
                parameter_name: 'location',
                text: formData.location,
              },
            ],
          },
        ],
      },
    };

    setLoading(true);
    await axios
      .post(import.meta.env.VITE_API_ENDPOINT, payload, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting form', error);
        setLoading(false);
      });
  };

  return (
    <>
      {/* Backdrop */}
      <div className='modal-backdrop fade show'></div>

      {/* Modal */}
      <div
        className='modal fade show d-block'
        tabIndex={-1}
        role='dialog'
        onClick={onClose} // close when clicking outside
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
        >
          <div className='modal-content rounded-3 shadow'>
            {/* Header */}
            <div className='modal-header'>
              <div className='modal-title'>Enquire Now</div>
              <button
                type='button'
                className='btn-close'
                aria-label='Close'
                onClick={onClose}
              ></button>
            </div>

            {/* Body */}
            <div className='modal-body'>
              <div className='row'>
                {/* Left Column - Image */}
                <div className='col-md-6 text-center mb-md-0'>
                  <img
                    src={bikeDetails?.image ?? bikeData[0].image}
                    alt={bikeDetails?.name ?? bikeData[0].name}
                    className='img-fluid'
                    style={{ maxHeight: '250px', objectFit: 'contain' }}
                  />
                  <h5 className='mt-2'>{bikeDetails?.name ?? bikeData[0].name}</h5>
                  {<p className='text-muted'>{bikeDetails?.sub_name ?? bikeData[0].sub_name}</p>}
                </div>

                {/* Right Column - Form */}
                <div className='col-md-6'>
                  <p className='text-muted mb-3'>Fill in the data to get a callback</p>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        className='form-control'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <input
                        type='tel'
                        name='number'
                        placeholder='Enter your phone number'
                        value={formData.number}
                        onChange={handleChange}
                        className='form-control'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <input
                        type='text'
                        name='location'
                        placeholder='Your area/location'
                        value={formData.location}
                        onChange={handleChange}
                        className='form-control'
                        required
                      />
                    </div>

                    <div className='d-flex justify-content-center'>
                      <button
                        type='submit'
                        className={
                          'btn w-75 d-flex align-items-center justify-content-center' +
                          (loading
                            ? ' btn-secondary'
                            : isSubmitted
                              ? ' btn-success'
                              : ' btn-danger')
                        }
                        disabled={
                          !formData.name ||
                          !formData.number ||
                          !formData.location ||
                          loading ||
                          isSubmitted
                        }
                      >
                        {loading ? (
                          <div
                            className='spinner-border spinner-border-sm text-light'
                            role='status'
                          >
                            <span className='visually-hidden'>Loading...</span>
                          </div>
                        ) : isSubmitted ? (
                          <>
                            <span className='me-1'>Submitted</span>
                            <i className='bi bi-check-circle'></i>
                          </>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeEnquiryModal;
