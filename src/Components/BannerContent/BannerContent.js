import React from 'react';

const BannerContent = ({ title }) => {
  console.log(title)
  return (
    <div >
      {
        title ? "" : (<h1 className="text-capitalize mb-4">FIND YOUR HOUSE RENT</h1>)
      }

      {
        title ? ((<h1>Apartment</h1>)) : (<form>
          <div className="form-row d-flex justify-content-center">
            <div className="col-9">
              <input type="text" className="form-control form-control-m" placeholder="Search House Here" />
            </div>
            <div className="col mb-1">
              <button className="btn common-btn px-4 ">Search</button>
            </div>
          </div>
        </form>)
      }
    </div>
  );
};

export default BannerContent;