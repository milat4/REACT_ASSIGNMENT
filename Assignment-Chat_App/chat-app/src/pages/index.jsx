import React from 'react';

function Index() {
  return (
    <div className="container">
      <div className="bg_left"></div>
      <div className="bg_right"></div>
      <div className="phone">
        <div className="phone_head_top"></div>
        <div className="phone_head_bottom"></div>

        <div className="image_block">
          <label htmlFor="img_one">
            <input type="checkbox" id="img_one" aria-label="image one" />
            <img className="img_one" src="/imgs/dog-image-1.jpg" alt="image 1" />
          </label>

          <label htmlFor="img_two">
            <input type="checkbox" id="img_two" aria-label="image two" />
            <img className="img_two" src="/imgs/dog-image-2.jpg" alt="image 2" />
          </label>

          <label htmlFor="img_three">
            <input type="checkbox" id="img_three" aria-label="image three" />
            <img className="img_three" src="/imgs/dog-image-3.jpg" alt="image 3" />
          </label>
        </div>

        <div className="messages_left">That sounds great. I'd be happy with that</div>
        <div className="messages_right">Here are a few pictures. She's a happy girl</div>

        <div className="option_one">
          <label htmlFor="opt_one">
            <input type="radio" id="opt_one" name="option" value="0" />
            <div className="option"></div>
            <span className="options_label">30 minute walk</span>
            <span className="options_price">$29</span>
          </label>
        </div>

        <div className="option_two">
          <label htmlFor="opt_two">
            <input type="radio" id="opt_two" name="option" value="1" />
            <div className="option"></div>
            <span className="options_label">1 hour walk</span>
            <span className="options_price">$49</span>
          </label>
        </div>

        <textarea className="message_area" placeholder="Type a message ..." aria-label="message area"></textarea>

        <span className="btn_submit">&#8250;</span>
      </div>

      <div className="page_content">
        <h1>Simple booking</h1>
        <span className="pc_desc">
          Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.
        </span>
      </div>
    </div>
  );
}

export default Index;
