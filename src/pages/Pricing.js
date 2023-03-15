import React from "react";
import "../assets/css/Price.css";
import { FaGem, FaPaperPlane, FaRocket } from "react-icons/fa";

const Pricing = () => (
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Pricing</li>
        </ol>
        <h2>Pricing</h2>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <div class="sec-title text-center">
          <h2>Choose a Plan</h2>
        </div>

        <div class="outer-box">
          <div class="row">
            <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div class="inner-box">
                <div class="icon-box">
                  <div class="icon-outer">
                    <FaPaperPlane />
                  </div>
                </div>
                <div class="price-box">
                  <div class="title">Free Pan</div>
                  <h4 class="price">₹0</h4>
                </div>
                <ul class="features">
                  <li class="true">Comming soon</li>
                  <li class="true">Comming soon</li>
                  <li class="false">Comming soon</li>
                  <li class="false">Comming soon</li>
                </ul>
                <div class="btn-box">
                  <a href="https://codepen.io/saurabh" class="theme-btn">
                    BUY plan
                  </a>
                </div>
              </div>
            </div>

            <div
              class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div class="inner-box">
                <div class="icon-box">
                  <div class="icon-outer">
                    <FaGem />
                  </div>
                </div>
                <div class="price-box">
                  <div class="title">Single Plan</div>
                  <h4 class="price">₹200</h4>
                </div>
                <ul class="features">
                  <li class="true">Comming soon</li>
                  <li class="true">Comming soon</li>
                  <li class="true">Comming soon</li>
                  <li class="false">Comming soon</li>
                </ul>
                <div class="btn-box">
                  <a href="https://codepen.io/saurabh" class="theme-btn">
                    BUY plan
                  </a>
                </div>
              </div>
            </div>

            <div
              class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div class="inner-box">
                <div class="icon-box">
                  <div class="icon-outer">
                    <FaRocket />
                  </div>
                </div>
                <div class="price-box">
                  <div class="title">Organization Plan</div>
                  <h4 class="price">₹2000</h4>
                </div>
                <ul class="features">
                  <li class="true">Comming soon</li>
                  <li class="true">Comming soon</li>
                  <li class="true">Comming soon</li>
                  <li class="true">Comming soon</li>
                </ul>
                <div class="btn-box">
                  <a href="https://codepen.io/saurabh" class="theme-btn">
                    BUY plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Pricing;
