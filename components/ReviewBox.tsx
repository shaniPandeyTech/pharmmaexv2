import React from "react";

const ReviewBox = ({
    text='Pre-Registration',
    styleObj = {},
    icon = ''
}) => {
    return (
        <div className="card-body">
            <div className="d-flex align-items-center mb-3">
            <img
                src="reviewPic.png"
                className="rounded-circle me-3"
                alt="User"
            />
            <div>
                <h6 className="mb-0">Tarmeet Singh</h6>
                <small className="text-muted">Director, Wahoo Wellness</small>
                <br />
                <small className="text-muted">
                <span>5.0</span>
                <span className="ms-2" style={{ color: '#FFD700' }}>
                    ★★★★★
                </span>
                </small>
            </div>
            </div>
            <p className="card-text text-wrap">
            We have been associating with PharmmaEx for the last many years, 
            and every time they have come up with innovative ideas. 
            They know what to deliver and that too on committed time.
            </p>
        </div>
    )
}

export default ReviewBox;