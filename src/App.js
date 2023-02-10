import React, { useState } from 'react'
import './App.css';
import Content from './component/Content';

const App = () => {

  const [header, setHeader] = useState("header111")


  return (
    < >
      <div className="header container-fluid">
        <div
          className="row d-flex flex-lg-row align-items-lg-center align-items-sm-start align-items-center  flex-sm-column">
          <div className="header_back col-md-1 col-sm-12 col-12 col-2">
            <button type="button" className="btn_back col-sm-12 btn btn-light justify-content-center">
              <div className="back_arrow position-relative">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="14.5858" x2="13.7279" y2="1.85786" stroke="#545454" stroke-width="2"
                    stroke-linecap="round" />
                </svg>
                <div className="back position-absolute">
                  Back
                </div>
                <svg className="position-absolute top-100" width="88" height="2" viewBox="0 0 88 2" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="87" y2="1" stroke="#545454" stroke-width="2"
                    stroke-linecap="round" />
                </svg>

              </div>
            </button>
          </div>
          <div className="user col-md-4 d-flex col-sm-12 col-lg-8">
            <img src="images/Ellipse.png" alt="" />
            <div className="d-flex flex-column">
              <h3 className="name">Pattie Trusdale</h3>
              <div className="full_stack">Full-stack Developer</div>
            </div>
          </div>
          <div className="col-md-1 position-absolute">
            <div className="hire position-relative">
              <div className="">HIRE</div>
            </div>
          </div>

        </div>
      </div>




      <div className="body-content container-fluid">
        <Content />

        <div className="big_img">
          <img className="img-sm-fluid" src="images/Rectangle.png" alt="" />
        </div>

        <div className="body_content d-flex align-items-center">
          <h1>
            Description
          </h1>
          <i type="button" data-toggle="modal" data-target="#exampleModalLong2" className="fa-solid fa-pen"></i>
        </div>

        <div className="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-lg " role="document">
            <div className="modal-content " style={{ backgroundColor: '#F3F3F3' }}>
              <div className="modal-header border-0 ">
                <div className="modal-title" id="exampleModalLabel">Description</div>

              </div>
              <div className="modal-body border-0 ">
                <div className="mb-2"><img src="images/edit-text.png" alt="" /></div>
                <div> <textarea name="tweet" id="textbox2" className="form-control" rows="4" cols="1"
                  maxlength="500"></textarea>
                  <span id="char_count2">500/500</span>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>



        <div className="list">
          <ul style={{ color: '#808080' }}>
            <li>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand
              praesent blandit lacinia erat vestibulum sed.</li>
            <li>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
            <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
          </ul>
        </div>

        <div className="body_content d-flex align-items-center">
          <h1 className="features">
            Features
          </h1>
          <i type="button" data-toggle="modal" data-target="#exampleModalLong3" className="fa-solid fa-pen"></i>
        </div>
        <div className="modal fade" id="exampleModalLong3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>

              </div>
              <div className="modal-body border-0">
                ...
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="user-research">
          <h3 className="position-relative">User research</h3>
          <div className="user-research-content d-flex flex-sm-row flex-column-reverse">
            <div><img src="images/Rectangle 2.png " alt="" /></div>
            <div className="user-research-text">Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus
              aliquam sit amet
              aliquam dieam earn
              magna bibendum imperdiet nullam orci pede.</div>
          </div>
          <div className="research-line">

          </div>
        </div>

        <div className="user-research">
          <h3 className="position-relative">Getting stakeholder</h3>
          <div className="user-research-content-right d-flex flex-lg-row-reverse flex-sm-row flex-column-reverse">
            <div><img src="images/Rectangle 2.1.png" alt="" /></div>
            <div className="user-research-text-right">Ipsum ac tellus semper interdum mauris libero ullamcorper purus
              sit amet
              nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.</div>
          </div>
          <div className="research-line">

          </div>
        </div>

        <div className="user-research">
          <h3 className="position-relative">User interaction</h3>
          <div className="user-research-content d-flex d-flex flex-sm-row flex-column-reverse  ">
            <div><img src="images/Rectangle 3.png" alt="" /></div>
            <div className="user-research-text">Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt
              anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.</div>
          </div>
          <div className="research-line">

          </div>
        </div>
        <h3 className="team-mem">Team-members</h3>


        <div className="member-row-1 row">
          <div className="member-row col-lg-3 col-md-6 col-12">
            <div>Antons Playden</div>
            <img src="images/Rectangle 4.png" alt="" />
            <div>Dental Hygienist</div>
            <div></div>
          </div>
          <div className="member-row col-lg-3 col-md-6 col-12 ">
            <div>Lowe Coronas</div>
            <img src="images/Rectangle 7.png" alt="" />
            <div>Financial Analyst</div>
            <div></div>
          </div>
        </div>
        <div className="member-row-2 row">
          <div className="member-row col-lg-3 col-md-6 col-12">
            <div>Galvan Bonifas</div>
            <img src="images/Rectangle 5.png" alt="" />
            <div>Media Manager</div>
            <div></div>
          </div>
          <div className="member-row col-lg-3 col-md-6 col-12">
            <div>Galvan Bonifas</div>
            <img src="images/Rectangle 6.png" alt="" />
            <div>Media Manager</div>
            <div></div>
          </div>

        </div>

        <div className="contact-me">
          <h3>Want to know more, contact me!</h3>


        </div>

        <div className="contact container-fluid">
          <div className="row">
            <div className="contact_inf_box col-md-4 col-12">
              <div className="contact_inf">
                <img src="images/mail.png" alt="" />
                <div> pattietrusdale@gmail.com</div>
              </div>
              <div className="contact_inf">
                <img src="images/phone.png" alt="" />
                <div>+8421 223 2234</div>
              </div>
              <div className="contact_inf">
                <img src="images/location.png" alt="" />
                <div>34 Milwaukee Avenue</div>
              </div>

            </div>

            <div className="contact_inf_left_box col-md-4 col-12">
              <div className="contact_inf_left">
                <img src="images/git.png" alt="" />
                <div>github.com/pattietrusdale</div>
              </div>
              <div className="contact_inf_left">
                <img src="images/in.png" alt="" />
                <div>linkedin.com/in/pattie-trusdale-34...</div>
              </div>
              <div className="contact_inf_left">
                <img src="images/git.png" alt="" />
                <div>facebook.com/pattie.trusdale</div>
              </div>
            </div>


          </div>
        </div>




      </div>
      <div className="footer container-fluid d-flex align-items-lg-center align-items-sm-center justify-content-sm-start ">

        <div className="footer-content-left">Copyright 2019 © Academic System</div>
        <div className="footer-content-right">Designed & Developed by Quang Dat Pham</div>


      </div>









    </>
  );

}

export default App;