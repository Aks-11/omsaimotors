import { useState } from 'react';
import type { CustomerReview } from '../schemas/customerReview';

interface IProps {
  customerReviews: CustomerReview[];
}

function CustomerReviews({ customerReviews }: IProps) {
  // keep track of expanded cards by ID
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className='customer-reviews-container'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='reviews-heading'>Customer Reviews</div>
      </div>
      <div className='row mt-3'>
        {customerReviews.map((review) => {
          const isExpanded = expandedIds.includes(review.id);
          return (
            <div key={review.id} className='col-lg-4 col-md-6 col-sm-12 col-12 mb-4'>
              <div className='card p-3 h-100'>
                <div className={`review-text ${isExpanded ? 'expanded' : ''}`}>{review.text}</div>
                <div>
                  <span className='read-more mt-1' onClick={() => toggleExpand(review.id)}>
                    {isExpanded ? 'Read less' : 'Read more'}
                  </span>
                </div>
                <div className='d-flex align-items-center mt-3'>
                  <i className='bi bi-person-fill'></i>
                  <div className='reviewer-info'>
                    <span className='ms-2'>{review.name}</span>
                    <span className='mx-1'>|</span>
                    <span>{review.rating}</span>
                    <i className='bi bi-star-fill star-icon ms-1'></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CustomerReviews;
