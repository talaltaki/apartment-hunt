import React from 'react';

const BannerContent = () => {
    return (
        <div >
            <h1 className="text-capitalize mb-4">FIND YOUR HOUSE RENT</h1>
            <form>
  <div class="form-row">
    <div class="col-9">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <button className="btn common-btn px-4">Search</button>
    </div>
  </div>
</form>
        </div>
    );
};

export default BannerContent;