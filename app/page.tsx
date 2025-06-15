import TimeVenueBox from '@/components/TimeVenueBox'
import GreenBtn from '@/components/GreenBtn'
import React from 'react'
import SeriesBoxHead from '@/components/SeriesBoxHead'
import PastSeriesBox from '@/components/PastSeriesBox'

const page = () => {
  return (
    <>
    <div style={{
      height: "700px",
      padding: "0px",
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: "60px",
      borderTopRightRadius: "60px"
    }}>
      {/* <video autoPlay muted loop playsInline style={{
        width: "100%",
        height: "100%",
        objectFit: 'cover',
        background: "linear-gradient(180deg, rgba(0, 131, 61, 0.6) 0%, rgba(0, 0, 0, 0.5) 56.45%, rgba(0, 0, 0, 0.9) 100%)"
      }}>
        <source src="BannerVideo.mp4" type="video/mp4" />
      </video> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(0, 131, 61, 0.6) 0%, rgba(0, 0, 0, 0.5) 56.45%, rgba(0, 0, 0, 0.9) 100%)"
        }}
      />
      <div
        className='bn-timer-container'
      >
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <div className='bn-row-num'>
            130
          </div>
          <div className='bn-row-tl'>
            Days
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "25px 0" }}>
          <div className='bn-row-num'>
            3,105
          </div>
          <div className='bn-row-tl'>
            Hours
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <div className='bn-row-num'>
            1,86,347
          </div>
          <div className='bn-row-tl'>
            Minutes
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "42%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "45%",
          margin: "0 auto",
          padding: "2.5rem 2rem"
        }}
      >
        <div style={{ 
            fontWeight: 100,
            fontSize: "0.8rem",
            lineHeight: "15px",
            letterSpacing: "0.3rem",
            textTransform: "uppercase"
        }}>
          PharmmaEx Presenting
        </div>
        <div style={{ 
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1rem"
        }}>
          India’s Largest Platform for <br />
          Third Party Pharma Manufacturing and PCD <br />
          Franchise Opportunities.
        </div>
        <div style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "1rem", lineHeight: "1.75rem" , letterSpacing: "0.1rem"}}>
          02-03 October, 2025 <span style={{
            fontWeight: 400
          }}>| Bombay Exhibition Centre, Mumbai</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <button className="btn-bnr">Pre-Registration</button>
          <button className="btn-bnr">Become Exhibitor</button>
        </div>
      </div>
      <img
        src="scanQR.png"
        alt="Scan QR"
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "6rem",
          width: "160px",
          height: "200px",
          zIndex: 4,
          borderRadius: "16px",
          padding: "10px",
        }}
      />
      </div>
      {/* Now started that list strip  */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          background: "#00833D",
          zIndex: 5,
          height: "45px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "scroll-left 32s linear infinite"
          }}
        >
          {[
            "Top Pharma Companies",
            "Best PCD Franchise Opportunities",
            "Third Party Manufacturing",
            "Bulk Pharma Deals",
            "Meet Industry Leaders",
            "Networking Events"
          ].map((item, idx) => (
            <span key={idx} style={{
              color: "#fff",
            }}>
            <span style={{ marginBottom: "1rem", fontSize: "1.5rem", verticalAlign: "middle", marginRight: "3rem", marginLeft: "1rem" }}>•</span>
            <span
              key={idx}
              style={{
                display: "inline-block",
                fontSize: "1.1rem",
                fontWeight: 400,
                verticalAlign: "middle",
                margin: "0 2.5rem 0 0",
                letterSpacing: "-1%"
              }}
            >
              {item}
            </span>
            </span>
          ))}
        </div>
      </div>
      {/* next section begin  */}
      
      <section
        style={{
          width: "100%",
          margin: "2.5rem auto 0 auto",
          textAlign: "center",
          padding: "2.5rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#fff"
        }}
      >
        <div style={{
          fontWeight: 700,
          fontSize: "3rem",
          color: "#000000",
          marginBottom: "1.2rem",
          lineHeight: "58px"
        }}>
          Join This Pharma Exhibition to Network <br />
          With Leading Industry Professionals.
        </div>
        <div style={{
          fontWeight: 400,
          fontSize: "1.275rem",
          marginBottom: "2rem",
          letterSpacing: "-1%",
          lineHeight: "1.875rem",
        }}>
          Lorem ipsum dolor sit amet consectetur. Quis cras arcu morbi tortor adipiscing varius sed. Non massa volutpat aliquam.<br />
          Porttitor pulvinar sed in a sed pulvinar ultricies nunc. Arcu vitae non turpis sit convallis sit eget consectetur. Quisque laoreet <br />
          ullamcorper eget vulputate felis neque. Habitasse mauris nulla egestas dui tortor.
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="nav-btn">Pre-Registration</button>
          <button className="nav-btn">Become Exhibitor</button>
        </div>
      </section>


      <div className="container-fluid" style={{
        padding: "0"
      }}>
        <div className="row" style={{
          width: "76%",
          margin: "0 auto",
        }}>
          {/* Left Div */}
          <div className="col-md-6 d-flex flex-column p-4" style={{
            justifyContent: "center"
          }}>
            <div>
              <h2 className="mb-3" style={{
                fontSize: "3rem",
                fontWeight: 700,
              }}>About PharmmaEx</h2>
              <p className='com-font-sm' style={{
                textAlign: "justify",
              }}>
                PharmmaEx is India’s leading pharmaceutical exhibition focused 
                exclusively on Third-Party Manufacturing and PCD Franchise Business. 
                We bring together manufacturers, distributors, wholesalers, and 
                industry professionals from across the country under one roof to 
                explore new partnerships, expand networks, and grow their pharma businesses.
              </p>
            </div>
            {/* Icon and Text */}
            <div className="d-flex align-items-left mt-4" >
              <div className="me-3" style={{
                backgroundColor: "#00833D",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "80px",
                borderRadius: "50%"
              }}>
              <img
                src="Group.png"
                alt="Icon"
                style={{
                  width: "48px",
                  height: "48px"
                }}
              />
              </div>
              <span className="fs-5 com-font-sm">Global Networking Opportunities: Connect with top industry stakeholders, researchers, and decision-makers from across the globe.</span>
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="me-3" style={{
                backgroundColor: "#00833D",
                height: "80px",     
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "80px",
                borderRadius: "50%",              
              }}>
              <img
                src="Group.png"
                alt="Icon"
                style={{
                  width: "48px",
                  height: "48px"
                }}
              />
              </div>
              <span className="fs-5 com-font-sm" >Showcase Innovations: Explore the latest advancements in pharmaceutical technologies, formulations, and manufacturing processes.</span>
            </div>
            <button className="nav-btn" style={{
              marginTop: "3rem"
            }}>Pre-Registration</button>
          </div>

          {/* Right Div */}
          <div className="col-md-6 p-4">
            <div className="row">
              {/* Top Full-Width Image */}
              <div className="col-12 mb-3">
                <img
                  src="4I7A1994-@2x.png"
                  alt="Top"
                  className="img-fluid w-100 rounded"
                />
              </div>
              {/* Two Equal Images Below */}
              <div className="col-6">
                <img
                  src="IMG_6409.png"
                  alt="Bottom Left"
                  className="img-fluid w-100 rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src="IMG_6640.png"
                  alt="Bottom Right"
                  className="img-fluid w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Whats Exhibition Section*/}
      <div style={{
        position: "relative",
        padding: 0
      }}>
        <img src='whatsExhibitionBg.png' />
        <div className='exbtn'>
          <h3>What's in the Exhibition</h3>
          <div className='exbtn-boxs'>
            <p>6000+</p>
            <span>Attendees</span>
          </div>
          <div className='exbtn-boxs'> 
            <p>120+</p>
            <span>Exhibitors</span>
          </div>
          <div className='exbtn-boxs'>
            <p>7500+</p>
            <span>Product on Display</span>
          </div>
          <div className='exbtn-boxs'>
            <p>10+</p>
            <span>Media Coverage</span>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="container-fluid" style={{
        padding: "0",
        marginTop: "5rem"
      }}>
        <div className="row" style={{
          width: "76%",
          margin: "0 auto",
        }}>
          {/* Left Div */}
          <div className="col-md-6 d-flex flex-column p-4" style={{
            justifyContent: "center"
          }}>
            <div>
              <h2 className="mb-3" style={{
                fontSize: "3rem",
                fontWeight: 600,
                width: "80%"
              }}>Pharma Connections Made Easy</h2>
              <p className='com-font-sm' style={{
                textAlign: "justify",
              }}>
                PharmmaEx is set to make history as the first-of-its-kind event in the bustling commercial capital of India – Mumbai. 
                This three-day business extravaganza will showcase the very best of the pharmaceutical industry, featuring. 
              </p>
              <br />
              <p className='com-font-sm' style={{
                textAlign: "justify",
              }}>
                Mumbai, often referred to as the gateway to the Indian pharmaceutical industry, 
                serves as the perfect backdrop for this monumental event. With its strategic importance and global connections, 
                the expo is expected to draw 8,000+ business delegates from around the world.
              </p>                              
            </div>

            <button className="nav-btn" style={{
              marginTop: "1.5rem"
            }}>Pre-Registration</button>
          </div>

          {/* Right Div */}
          <div className="col-md-6 p-4">
            <div className="d-flex" style={{
              height: "100%",
            }}>
              {/* Two Equal Images Below */}
              <div className="col-6 md-ezy-right" style={{

              }}>
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                  margin: "0.75rem"
                }}>
                  <img src='suitcase.png' width={35} height={35} />
                  <h5>Visitor Profile</h5>
                </div>
                <ul>
                  <li>Plant Management</li>
                  <li>Plant Engineering</li>
                  <li>Manufacturing/ Production ocers/ Formulations</li>
                  <li>Maintenance Engineering</li>
                  <li>Packaging</li>
                  <li>Pharmacists</li>
                  <li>Contract Manufacturers</li>
                </ul>
              </div>
              <div className="col-6 md-ezy-right" style={{

              }}>
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                  margin: "0.75rem"
                }}>
                  <img src='suitcase.png' width={35} height={35}/>
                  <h5>Visitor Profile</h5>
                </div>
                <ul>
                  <li>Pharma Processing Machineries (Tablet / Capsule / Liquid/ Injectable / Ointment / Dry Syrup)</li>
                  <li>Packaging Machineries, Packaging Materials & Consumables</li>
                  <li>Environment Control Equipment/ Services, Clean room Partitions, Equipment, Furniture & Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Next Section  */}
      <div className="container" style={{
        padding: "3.5rem 1rem",
        position: "relative",
      }}>
        <div className="col-md-10 mx-auto row align-items-center mb-4" style={{
              position: "relative",
        }}>
          <div className="col">
            <h2 style={{
              fontSize: "3rem",
              fontWeight: 600,
              textAlign: "center",
            }}>Eligibility for Exhibitors</h2>
          </div>
        </div>

        {/* Row 2: Scroll Left to Right */}
        <div className="row mb-4" style={{
          marginTop: "2.5rem",
        }}>
          <div
            className="d-flex scroll-content"
            style={{ paddingLeft: "14rem", whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "center",
                alignItems: "center",
              }}>
                <img 
                  src='exhibitor.png' 
                  width={450}
                  height={225}
                />
                <div style={{
                  width:"450px",
                  textWrap: "initial",
                  backgroundColor: "#00833D",
                  color: "#FFFFFF",
                  padding: "1.5rem"
                }}>
                  <h6 style={{
                    fontSize: "2.125rem",
                    fontWeight: 500,
                    lineHeight: "34px"
                  }}>Allopathic</h6>
                  <p style={{
                    fontSize: "1.35rem",
                    lineHeight: "1.5rem",
                    fontWeight: 400,
                    marginTop: "1rem"
                  }}>
                    Allopathic professionals can attend to stay updated on pharmaceutical advancements and treatments.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="container" style={{
        padding: "3.5rem 1rem",
        position: "relative",
        backgroundColor: "#FAFAFA"
      }}>
        <div className="col-md-10 mx-auto row align-items-center mb-4" style={{
              position: "relative",
        }}>
          <div className="col">
            <h2 style={{
              fontSize: "3rem",
              fontWeight: 600,
              textAlign: "center",
            }}>Our Key Sponsors</h2>
          </div>
        </div>

        {/* Row 2: Scroll Left to Right */}
        <div className="row mb-4">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto', justifyContent: "center" }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                width: '250px',
                height: '180px',
                border: "1px solid #D8D8D8",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF"
              }}>
                <span style={{
                  textAlign: "center",
                  width: "80%",
                  marginTop: "1.25rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #D8D8D8",
                }}>Industry Leader</span>
                <img 
                  src='logosDemo.png' 
                  width={180}
                  height={50}
                  style= {{
                    marginBottom: "1rem"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row mb-4">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto', justifyContent: "center" }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{
                width: '250px',
                height: '180px',
                border: "1px solid #D8D8D8",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF"
              }}>
                <span style={{
                  textAlign: "center",
                  width: "80%",
                  marginTop: "1.25rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #D8D8D8",
                }}>Industry Leader</span>
                <img 
                  src='logosDemo.png' 
                  width={180}
                  height={50}
                  style= {{
                    marginBottom: "1rem"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* Next Section */}
      <div className="container" style={{
        padding: "3.5rem 1rem",
        position: "relative"
      }}>
        <div className="col-md-10 mx-auto row align-items-center mb-4" style={{
          position: "relative"
        }}>
          <div className="col">
            <h2 style={{
              fontSize: "3rem",
              fontWeight: 600,
              textAlign: "center",
            }}>Our Exhibitors</h2>
          </div>
        </div>

        {/* Row 2: Scroll Left to Right */}
        <div className="row">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
          >
            {[...Array(16)].map((_, i) => (
              <div key={i} style={{
                width: '250px',
                height: '140px',
                border: "1px solid #D8D8D8",
                borderRadius: "25px",
              }}>
                <img 
                  src='logosDemo.png' 
                  width={180}
                  height={50}
                  style={{
                    margin: "40px 15px"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
          >
            {[...Array(16)].map((_, i) => (
              <div key={i} style={{
                width: '250px',
                height: '140px',
                border: "1px solid #D8D8D8",
                borderRadius: "25px",
              }}>
                <img 
                  src='logosDemo.png' 
                  width={180}
                  height={50}
                  style={{
                    margin: "40px 15px"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
          >
            {[...Array(16)].map((_, i) => (
              <div key={i} style={{
                width: '250px',
                height: '140px',
                border: "1px solid #D8D8D8",
                borderRadius: "25px",
              }}>
                <img 
                  src='logosDemo.png' 
                  width={180}
                  height={50}
                  style={{
                    margin: "40px 15px"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="container" style={{
        backgroundColor: "#FAFAFA",
        padding: "3.5rem 1rem",
        position: "relative"
      }}>
        {/* Row 1: Heading and Button */}
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
        <div className="col-md-10 mx-auto row align-items-center mb-4" style={{
              zIndex: 2,
              position: "relative"
        }}>
          <div className="col">
            <h2 style={{
              fontSize: "3rem",
              fontWeight: 600,
            }}>Our Clients Reviews</h2>
          </div>
          <div className="col text-end">
            <button className="nav-btn" >View more reviews</button>
          </div>
        </div>

        {/* Row 2: Scroll Left to Right */}
        <div className="row mb-4">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={`card1-${i}`}
                className="card"
                style={{ minWidth: '350px', minHeight: '300px', borderRadius: "25px", display: 'inline-block', border: "1px solid #BCBCBC" }}
              >
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
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scroll Right to Left */}
        <div className="row">
          <div
            className="d-flex scroll-content"
            style={{ whiteSpace: 'nowrap', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={`card1-${i}`}
                className="card"
                style={{ minWidth: '350px', minHeight: '300px', borderRadius: "25px", display: 'inline-block', border: "1px solid #BCBCBC" }}
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>

      </>
  )
}

export default page