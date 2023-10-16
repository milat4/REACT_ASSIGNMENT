function Index() {
    return (
      <main>
        <section className="container">
          <div className="intro">
            <div className="intro__text pa-5">
              <h1>Next generation digital banking</h1>
              <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
              <button className="btn btn-primary">Request Invite</button>
            </div>
            <div className="intro__img">
              <img src="/imgs/image-mockups.png" className="mockups" alt="mockups" />
            </div>
          </div>
        </section>
  
        <section className="container">
          <div className="features">
            <div className="features__text pa-5">
              <h2>Why choose Easybank?</h2>
              <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className="features__body pa-5">
              <div className="features__card">
                <img src="/imgs/icon-online.svg" alt="image here" />
                <h3>Online Banking</h3>
                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
              </div>
              <div className="features__card">
                <img src="/imgs/icon-budgeting.svg" alt="image here" />
                <h3>Simple Budgeting</h3>
                <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
              </div>
              <div className="features__card">
                <img src="/imgs/icon-onboarding.svg" alt="image here" />
                <h3>Fast Onboarding</h3>
                <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
              </div>
              <div className="features__card">
                <img src="/imgs/icon-api.svg" alt="image here" />
                <h3>Open API</h3>
                <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="container">
          <div className="blog">
            <div className="pa-5">
              <h2>Latest Articles</h2>
  
              <div className="blog__body">
                <div className="blog__card">
                  <div className="blog__img blog__img--1">
                    <img src="/imgs/image-currency.jpg" alt="image here" />
                  </div>
                  <div className="blog__card--body">
                    <span className="blog__card--name">By Claire Robinson</span>
                    <h4>Receive money in any currency with no fees</h4>
                    <p className="blog__card--content">
                      The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...
                    </p>
                  </div>
                </div>
  
                <div className="blog__card">
                  <div className="blog__img blog__img--2">
                    <img src="/imgs/image-restaurant.jpg" alt="image here" />
                  </div>
                  <div className="blog__card--body">
                    <span className="blog__card--name">By Wilson Hutton</span>
                    <h4> Treat yourself without worrying about money</h4>
                    <p className="blog__card--content">
                      Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...
                    </p>
                  </div>
                </div>
  
                <div className="blog__card">
                  <div className="blog__img blog__img--3">
                    <img src="/imgs/image-plane.jpg" alt="image here" />
                  </div>
                  <div className="blog__card--body">
                    <span className="blog__card--name">By Wilson Hutton</span>
                    <h4>Take your Easybank card wherever you go</h4>
                    <p className="blog__card--content">
                      We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...
                    </p>
                  </div>
                </div>
  
                <div className="blog__card">
                  <div className="blog__img blog__img--4">
                    <img src="/imgs/image-confetti.jpg" alt="image here" />
                  </div>
                  <div className="blog__card--body">
                    <span className="blog__card--name">By Claire Robinson</span>
                    <h4>Our invite-only Beta accounts are now live!</h4>
                    <p className="blog__card--content">
                      After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Index;
  