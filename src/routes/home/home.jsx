import Topbar from "../../components/navbar/navbar";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <Topbar />
      <section class="section-big main-color">
        <div class="container">
          <div class="row">
            <div class="col-md-12 pb-20 text-center">
              <h2 class="section-title mb-10">
                <span>
                  Some <strong class="primary-color">Vertex</strong> Core
                  Featuress
                </span>
              </h2>
              <p class="section-sub-title">
                We are a passionate digital design agency that specializes in
                beautiful and easy-to use digital design web development
                services.
              </p>
              <div class="exp-separator center-separator">
                <div class="exp-separator-inner"></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <ul class="i-list medium">
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-desktop"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">Fully Responsive Design</h3>
                    <p class="sub-title">
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim ante,
                      dapibus in.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-code"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">Easy &amp; Clean Code</h3>
                    <p>
                      Aenean vulputate tellus. Aenean leo ligula, porttitor eu,
                      consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                      dapibus in.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-paper-plane"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">24/7 Customer Support</h3>
                    <p>
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat, eleifend ac, enim lorem ante,
                      dapibus in.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="i-list medium">
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-diamond"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Endless Possibilites</h3>
                    <p class="sub-title">
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend Aliquam lorem
                      ante, dapibus in.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-recycle"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Free Lifetime Updates</h3>
                    <p>
                      Aenean eleifend tellus. Aenean leo ligula, porttitor eu
                      consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                      dapibus in.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Clean &amp; Modern Design</h3>
                    <p>
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend enim lorem ante,
                      dapibus in.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="i-list medium">
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa-brands fa-codepen"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Useful Shortcodes</h3>
                    <p class="sub-title">
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa-solid fa-arrows-to-circle"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Multipurpose Concept</h3>
                    <p>
                      Aenean vulputate eleifend tellus ligula, porttitor eu,
                      consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                      dapibus in.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Crafted With Love</h3>
                    <p>
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac lorem ante,
                      dapibus in.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
