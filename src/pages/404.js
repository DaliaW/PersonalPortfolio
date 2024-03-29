import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import styles from '../pages/404.css';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 class="err404">404 PAGE NOT FOUND!</h1>

            <p class="err">
              <div class="err"> OOPS!! LOOKS LIKE YOU'RE LOST IN SPACE! </div>
              <div class="err"> You better go back home </div>{' '}
            </p>
            <Fade bottom duration={1000} delay={1000} distance="30px">
              <p className="hero-cta justify-content-center">
                <Link className="cta-btn cta-btn--hero" to="/">
                  Let's go back!
                </Link>
              </p>
            </Fade>
            <div class="style">
              <svg viewBox="-300 5 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="404">
                  <path
                    id="Vector"
                    d="M543.265 463.526C467.523 583.082 326.342 578.319 248.819 578.319C111.443 578.319 5 478.468 5 335.164C5 191.86 19.0631 133.82 164.265 56.4359C615.69 -146.009 633.972 303.624 543.265 463.526Z"
                    fill="#1D1C26"
                  />
                  <g id="moon">
                    <path
                      id="Vector_2"
                      d="M455.076 135.979C480.782 135.979 501.62 114.242 501.62 87.4273C501.62 60.6127 480.782 38.8752 455.076 38.8752C429.371 38.8752 408.533 60.6127 408.533 87.4273C408.533 114.242 429.371 135.979 455.076 135.979Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_3"
                      d="M450.498 59.5696C453.448 59.5696 455.839 57.0751 455.839 53.9981C455.839 50.921 453.448 48.4265 450.498 48.4265C447.549 48.4265 445.157 50.921 445.157 53.9981C445.157 57.0751 447.549 59.5696 450.498 59.5696Z"
                      fill="#CBCBCB"
                    />
                    <path
                      id="Vector_4"
                      d="M459.655 115.285C462.604 115.285 464.996 112.791 464.996 109.714C464.996 106.636 462.604 104.142 459.655 104.142C456.705 104.142 454.313 106.636 454.313 109.714C454.313 112.791 456.705 115.285 459.655 115.285Z"
                      fill="#CBCBCB"
                    />
                    <path
                      id="Vector_5"
                      d="M480.256 82.6517C482.363 82.6517 484.071 80.87 484.071 78.6721C484.071 76.4741 482.363 74.6924 480.256 74.6924C478.148 74.6924 476.44 76.4741 476.44 78.6721C476.44 80.87 478.148 82.6517 480.256 82.6517Z"
                      fill="#CBCBCB"
                    />
                    <path
                      id="Vector_6"
                      d="M436.764 104.142C443.507 104.142 448.972 98.4403 448.972 91.4069C448.972 84.3736 443.507 78.672 436.764 78.672C430.022 78.672 424.556 84.3736 424.556 91.4069C424.556 98.4403 430.022 104.142 436.764 104.142Z"
                      fill="#CBCBCB"
                    />
                  </g>
                  <path
                    id="planet2"
                    d="M310.545 151.889C314.759 151.889 318.175 148.325 318.175 143.929C318.175 139.533 314.759 135.97 310.545 135.97C306.331 135.97 302.915 139.533 302.915 143.929C302.915 148.325 306.331 151.889 310.545 151.889Z"
                    fill="#FFDD63"
                  />
                  <path
                    id="planet1"
                    d="M515.032 172.583C519.246 172.583 522.662 169.019 522.662 164.624C522.662 160.228 519.246 156.664 515.032 156.664C510.818 156.664 507.402 160.228 507.402 164.624C507.402 169.019 510.818 172.583 515.032 172.583Z"
                    fill="#FFF963"
                  />
                  <path
                    id="planet3"
                    d="M424.234 184.522C426.762 184.522 428.812 182.384 428.812 179.746C428.812 177.109 426.762 174.971 424.234 174.971C421.705 174.971 419.656 177.109 419.656 179.746C419.656 182.384 421.705 184.522 424.234 184.522Z"
                    fill="#D48B8B"
                  />
                  <path
                    id="planet4"
                    d="M71.7231 334.954C74.2515 334.954 76.3011 332.816 76.3011 330.178C76.3011 327.541 74.2515 325.402 71.7231 325.402C69.1947 325.402 67.145 327.541 67.145 330.178C67.145 332.816 69.1947 334.954 71.7231 334.954Z"
                    fill="#FF5454"
                  />
                  <path
                    id="Vector_7"
                    d="M342.592 463.099C345.12 463.099 347.17 460.961 347.17 458.324C347.17 455.686 345.12 453.548 342.592 453.548C340.063 453.548 338.014 455.686 338.014 458.324C338.014 460.961 340.063 463.099 342.592 463.099Z"
                    fill="#D06767"
                  />
                  <path
                    id="star4"
                    d="M131.841 260.391L127.428 263.327L123.403 261.125L124.107 262.225L125.905 264.906L122.349 269.927L127.417 266.495L132.544 269.56L128.941 264.906V264.917L131.841 260.391Z"
                    fill="white"
                  />
                  <path
                    id="star7"
                    d="M368.101 44.7433L363.688 47.6795L359.664 45.4768L360.367 46.577L362.165 49.258L358.609 54.2787L363.677 50.8474L368.805 53.912L365.201 49.258V49.269L368.101 44.7433Z"
                    fill="white"
                  />
                  <path
                    id="star6"
                    d="M542.484 224.45L538.07 227.386L534.046 225.183L534.749 226.284L536.547 228.964L532.991 233.985L538.06 230.554L543.187 233.619L539.583 228.964V228.976L542.484 224.45Z"
                    fill="white"
                  />
                  <path
                    id="Vector_8"
                    d="M519.28 389.487L514.866 392.423L510.842 390.22L511.545 391.32L513.343 394.001L509.787 399.022L514.856 395.591L519.983 398.655L516.379 394.001V394.012L519.28 389.487Z"
                    fill="white"
                  />
                  <path
                    id="star3"
                    d="M131.138 115.159L126.724 118.095L122.7 115.892L123.403 116.993L125.201 119.674L121.646 124.694L126.714 121.263L131.841 124.328L128.238 119.674V119.685L131.138 115.159Z"
                    fill="white"
                  />
                  <path
                    id="star5"
                    d="M31.2904 287.531L26.8768 290.467L22.8526 288.264L23.5557 289.364L25.3538 292.045L21.7979 297.066L26.8663 293.635L31.9936 296.699L28.39 292.045V292.056L31.2904 287.531Z"
                    fill="white"
                  />
                  <path
                    id="star1"
                    d="M398.337 335.208L393.924 338.144L389.899 335.941L390.603 337.042L392.401 339.722L388.845 344.743L393.913 341.312L399.04 344.376L395.437 339.722V339.733L398.337 335.208Z"
                    fill="white"
                  />
                  <path
                    id="Vector_9"
                    d="M320.287 527.384L315.873 530.32L311.849 528.117L312.552 529.218L314.35 531.898L310.794 536.919L315.863 533.488L320.99 536.553L317.387 531.898V531.909L320.287 527.384Z"
                    fill="white"
                  />
                  <path
                    id="Vector_10"
                    d="M424.354 475.306L419.94 478.242L415.916 476.039L416.619 477.139L418.417 479.82L414.861 484.841L419.93 481.41L425.057 484.474L421.453 479.82V479.831L424.354 475.306Z"
                    fill="white"
                  />
                  <path
                    id="Vector_11"
                    d="M136.764 389.487L132.35 392.423L128.326 390.22L129.029 391.32L130.827 394.001L127.271 399.022L132.339 395.591L137.467 398.655L133.863 394.001V394.012L136.764 389.487Z"
                    fill="white"
                  />
                  <path
                    id="Vector_12"
                    d="M55.827 439.402L50.988 437.319L50.4056 432.618L49.9459 433.85L48.8746 436.925L42.8922 436.772L48.4958 439.13L49.0354 445.268L50.6183 439.518L50.6096 439.525L55.827 439.402Z"
                    fill="white"
                  />
                  <path
                    id="Vector_13"
                    d="M147.311 517.848L142.897 520.785L138.873 518.582L139.576 519.682L141.374 522.363L137.818 527.384L142.887 523.953L148.014 527.017L144.411 522.363V522.374L147.311 517.848Z"
                    fill="white"
                  />
                  <path
                    id="star2"
                    d="M346.304 230.318L341.89 233.254L337.866 231.051L338.569 232.152L340.367 234.833L336.811 239.853L341.879 236.422L347.007 239.487L343.403 234.833V234.844L346.304 230.318Z"
                    fill="white"
                  />
                  <path
                    id="star8"
                    d="M474.981 282.643L473.236 282.643L471.694 279.694L471.351 281.663L471.351 283.716L469.868 287.11L469.551 287.29L472.379 285.682L474.264 287.29L475.806 287.56L474.264 284.61L477.092 283.002L474.981 282.643Z"
                    fill="#FFBF84"
                  />
                  <path
                    id="shootingstar"
                    opacity="0.8"
                    d="M364.545 297.793L387.728 269.481L410.912 241.169L423.999 225.187C424.723 224.303 423.606 222.923 422.882 223.807L399.698 252.119L376.515 280.431L363.427 296.414C362.703 297.298 363.821 298.678 364.545 297.793Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    id="shootingstar4"
                    opacity="0.8"
                    d="M364.273 496.167L378.64 462.082L393.006 427.996L401.117 408.754C401.565 407.69 400.114 406.705 399.665 407.77L385.298 441.855L370.932 475.941L362.821 495.182C362.373 496.247 363.824 497.232 364.273 496.167Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    id="shootingstar3"
                    opacity="0.8"
                    d="M271.812 106.775L306.338 97.3234L340.863 87.8721L360.353 82.5367C361.432 82.2415 361.269 80.4434 360.19 80.7386L325.665 90.1899L291.139 99.6412L271.649 104.977C270.571 105.272 270.734 107.07 271.812 106.775Z"
                    fill="url(#paint2_linear)"
                  />
                  <path
                    id="shootingstar2"
                    opacity="0.8"
                    d="M57.1817 228.852L91.4401 218.397L125.699 207.942L145.038 202.04C146.108 201.714 145.897 199.921 144.827 200.248L110.568 210.703L76.31 221.158L56.9706 227.06C55.9005 227.386 56.1117 229.179 57.1817 228.852Z"
                    fill="url(#paint3_linear)"
                  />
                  <path
                    id="Vector_14"
                    d="M277.354 278.044L277.553 278.458L277.354 278.84V278.044Z"
                    fill="black"
                  />
                  <g id="astro">
                    <path
                      id="Vector_15"
                      d="M236 275C263.614 275 286 252.614 286 225C286 197.386 263.614 175 236 175C208.385 175 186 197.386 186 225C186 252.614 208.385 275 236 275Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_16"
                      d="M236.522 269.926C256.716 269.926 273.086 251.7 273.086 229.217C273.086 206.734 256.716 188.508 236.522 188.508C216.328 188.508 199.958 206.734 199.958 229.217C199.958 251.7 216.328 269.926 236.522 269.926Z"
                      fill="#2F2E41"
                    />
                    <g id="head1">
                      <path
                        id="Vector_17"
                        d="M214.7 209.797C221.657 195.814 235.42 195.162 235.42 195.162C235.42 195.162 248.832 193.122 257.435 214.418C265.454 234.268 257.537 261.612 240.232 266.259L257.435 258.941C252.268 264.09 246.713 259.052 244.244 258.941C234.199 258.556 228.601 266.278 221.997 264.09C216.418 262.241 210.796 252.094 211.056 248.472C211.811 237.956 208.007 223.251 214.7 209.797Z"
                        fill="#484671"
                      />
                      <path
                        id="Vector_18"
                        d="M259.674 282.215C254.468 296.637 237.684 288.888 237.684 288.888C237.684 288.888 225.031 299.195 218.188 277.448C216.564 272.289 215.199 270.458 215.076 264.792C214.715 248.193 223.343 219.714 233.233 216.014L220.074 223.715C223.996 218.375 235.686 248.113 237.586 248.199C245.32 248.481 242.183 215.864 247.287 218.034C251.599 219.867 256.032 230.212 255.87 233.931C255.63 239.442 255.796 261.088 255.859 268.093C255.918 274.808 262.125 275.423 259.674 282.215Z"
                        fill="#484671"
                      />
                      <g id="face">
                        <path
                          id="Vector_19"
                          opacity="0.2"
                          d="M242.641 281.476L259.045 264.985C259.045 264.985 255.727 274.42 242.641 281.476Z"
                          fill="black"
                        />
                        <path
                          id="Vector_20"
                          opacity="0.2"
                          d="M214.167 257.163L226.524 276.998C226.524 276.998 218.505 271.847 214.167 257.163Z"
                          fill="black"
                        />
                        <path
                          id="Vector_21"
                          d="M236.316 256.724C246.579 256.724 254.898 246.322 254.898 233.491C254.898 220.66 246.579 210.259 236.316 210.259C226.053 210.259 217.733 220.66 217.733 233.491C217.733 246.322 226.053 256.724 236.316 256.724Z"
                          fill="#FFB8B8"
                        />
                        <g id="mouth">
                          <g id="Frame 1" clip-path="url(#clip0)">
                            <path
                              id="mouthsmile"
                              d="M242.623 247.916C242.623 250.224 238.329 251.322 236.316 251.322C234.304 251.322 230.01 250.224 230.01 247.916C230.01 247.28 229.495 246.098 230.01 245.809C231.363 245.049 234.859 245.809 236.316 245.809C237.774 245.809 241.27 245.049 242.623 245.809C243.137 246.098 242.623 247.28 242.623 247.916Z"
                              fill="#515050"
                            />
                            <path
                              id="mouthsmile_2"
                              d="M241.781 245.809C241.781 246.798 237.791 247.778 236.316 247.778C234.84 247.778 230.85 246.798 230.85 245.809C230.85 244.82 234.84 245.823 236.316 245.823C237.791 245.823 241.781 244.82 241.781 245.809Z"
                              fill="white"
                            />
                            <path
                              id="mouthsmile_3"
                              d="M233.049 249.734C233.036 249.054 234.691 248.944 235.562 249.106C236.048 249.196 235.711 249.525 236.099 249.517C236.486 249.51 236.378 249.195 236.823 249.106C237.623 248.945 238.922 249.054 238.935 249.734C238.94 250.036 239.128 250.617 238.935 250.793C238.453 251.233 236.872 251.268 236.099 251.283C236.883 251.258 235.615 251.292 236.099 251.283C235.454 251.283 235.454 251.283 233.772 250.861C233.342 250.861 233.053 249.929 233.049 249.734Z"
                              fill="#FF6363"
                            />
                          </g>
                        </g>
                        <path
                          id="mouthsmile_4"
                          d="M238.866 239.796C238.866 240.444 236.837 241.086 235.952 241.086C235.066 241.086 233.037 240.444 233.037 239.796C233.037 239.149 235.066 239.796 235.952 239.796C236.837 239.796 238.866 239.149 238.866 239.796Z"
                          fill="#FFA3A3"
                          fill-opacity="0.98"
                        />
                        <path
                          id="lefteye"
                          d="M230.85 232.78C230.85 231.808 228.85 230.846 227.571 230.846C226.292 230.846 224.292 231.808 224.292 232.78C224.292 233.752 226.292 232.027 227.571 232.027C228.85 232.027 230.85 233.752 230.85 232.78Z"
                          fill="#535461"
                        />
                        <path
                          id="lefteyebrow"
                          d="M231.579 227.302C231.579 226.33 228.16 226.313 226.881 226.313C225.602 226.313 221.741 228.693 221.741 229.664C221.741 230.636 225.199 227.302 226.478 227.302C227.757 227.302 231.579 228.273 231.579 227.302Z"
                          fill="#535461"
                        />
                        <path
                          id="lefteyebrow_2"
                          d="M241.781 227.109C241.781 226.137 245.201 226.12 246.479 226.12C247.758 226.12 251.255 228.299 251.255 229.27C251.255 230.242 248.161 227.109 246.883 227.109C245.604 227.109 241.781 228.081 241.781 227.109Z"
                          fill="#535461"
                        />
                        <path
                          id="righteye"
                          d="M248.34 232.78C248.34 231.808 246.339 230.846 245.06 230.846C243.782 230.846 241.781 231.808 241.781 232.78C241.781 233.752 243.782 232.027 245.06 232.027C246.339 232.027 248.34 233.752 248.34 232.78Z"
                          fill="#535461"
                        />
                      </g>
                      <path
                        id="Vector_22"
                        d="M217.679 218.773L224.122 210.498L232.393 208.313H240.664L247.807 210.498L254.95 220.549V232.518L252.635 229.289L248.378 224.43L244.727 220.549L240.664 217.402L238.886 216.621L237.425 216.231L235.6 216.621L234.139 217.402L232.679 218.183L228.298 221.306L216.979 232.518L217.679 218.773Z"
                        fill="#F3F1FF"
                      />
                      <path
                        id="Vector_23"
                        d="M216.654 214.256L223.518 205.492L232.328 203.178H241.138L248.747 205.492L256.356 216.137L255.621 233.985L248.747 221.543L243.001 216.137L240.711 214.163L238.804 213.386L237.277 212.998L235.751 213.386L234.225 214.256L231.935 215.717L226.975 219.601L216.276 233.985L216.654 214.256Z"
                        fill="#484671"
                      />
                    </g>
                    <path
                      id="Vector_24"
                      d="M235.819 269.927C256.401 269.927 273.086 251.536 273.086 228.851C273.086 206.165 256.401 187.775 235.819 187.775C215.237 187.775 198.552 206.165 198.552 228.851C198.552 251.536 215.237 269.927 235.819 269.927Z"
                      fill="url(#paint4_linear)"
                    />
                    <g id="Vector_25" filter="url(#filter0_d)">
                      <path
                        d="M235.819 287.53C263.391 287.53 279.5 273.644 279.5 245.5C281.905 217.746 266.673 270.093 235.819 269.56C206.055 272.531 189.34 218.929 190.5 245.5C190.5 273.644 208.246 287.53 235.819 287.53Z"
                        fill="#E6E6E6"
                      />
                    </g>
                    <g id="suit">
                      <path
                        id="Vector_26"
                        d="M272.38 495.615C262.476 506.083 252.557 506.153 242.623 495.953L246.015 450.367L234.905 400.122L225.975 450.367L229.651 496.1C219.724 504.481 210.472 505.61 202.183 496.411C194.276 435.476 195.319 378.866 202.183 335.632L190.465 283.903L182.345 274.345L215.154 258.427C221.761 275.475 211.341 284.195 234.905 283.903C258.261 283.614 256.517 274.449 255.594 258.427L285.775 270.536C288.346 271.567 290.442 273.582 291.637 276.171C292.833 278.759 280.947 281.164 280.118 283.903L272.38 335.632C278.25 361.06 276.801 430.998 272.38 495.615Z"
                        fill="#E6E6E6"
                      />
                      <path
                        id="Vector_27"
                        d="M226.599 556.902C226.599 556.902 202.241 559.128 198.979 557.726C198.773 557.638 198.572 557.542 198.377 557.438C193.528 554.855 193.38 547.622 197.912 544.475L207.524 537.8L199.131 490.84L231.559 491.238L226.599 556.902Z"
                        fill="#2F2E41"
                      />
                      <path
                        id="Vector_28"
                        d="M244.911 557.3C244.911 557.3 269.269 559.526 272.532 558.124C272.738 558.036 272.938 557.94 273.133 557.836C277.983 555.253 278.13 548.02 273.598 544.873L263.987 538.198L275.813 491.238H241.859L244.911 557.3Z"
                        fill="#2F2E41"
                      />
                      <g id="Vector_29" filter="url(#filter1_d)">
                        <path
                          d="M213.485 454.322C208.052 454.322 204.441 453.115 202.088 451.731C197.803 449.21 196.919 445.776 196.883 445.631L198.362 445.236L197.622 445.434L198.361 445.232C198.391 445.353 199.163 448.212 202.905 450.384C207.025 452.774 206.024 458.548 222.13 453.468L225.645 450.384C217.938 452.815 218.15 454.322 213.485 454.322Z"
                          fill="#2F2E41"
                        />
                      </g>
                      <g id="Vector_30" filter="url(#filter2_d)">
                        <path
                          d="M258.893 454.322C254.228 454.322 254.449 452.816 246.74 450.384C262.845 455.464 265.351 452.775 269.473 450.384C273.215 448.212 273.986 445.353 274.017 445.232L275.494 445.631C275.458 445.776 274.575 449.21 270.289 451.731C267.936 453.115 264.325 454.322 258.893 454.322Z"
                          fill="#2F2E41"
                        />
                      </g>
                      <path
                        id="Vector_31"
                        d="M276.953 266.992L246.601 296.238H227.732L192.926 266.992L197.145 265.159L227.732 286.063H246.601L272.734 266.992H276.953Z"
                        fill="black"
                        fill-opacity="0.29"
                      />
                      <path
                        id="Vector_32"
                        d="M275.547 366.748L274.542 351.175L237.225 349.878L199.788 351.174C199.696 360.583 195.202 367.79 208.044 371.883C237.71 372.983 253.398 375.917 275.547 366.748Z"
                        fill="#A3A3A3"
                        fill-opacity="0.62"
                      />
                      <g id="rightarmastro">
                        <path
                          id="Vector_33"
                          d="M303.698 291.976L332.638 364.223L338.19 378.08L339.294 380.829L342.536 390.4C343.069 391.973 343.327 393.608 343.293 395.203C343.26 396.798 342.935 398.32 342.34 399.673C341.745 401.026 340.892 402.182 339.834 403.069C338.775 403.956 337.535 404.555 336.19 404.829C334.844 405.103 333.422 405.046 332.012 404.661C330.602 404.277 329.234 403.573 327.993 402.593C326.751 401.614 325.664 400.38 324.797 398.968C323.931 397.556 323.304 395.996 322.956 394.385L318.609 374.292L317.922 372.96L313.648 364.618L262.953 265.775L270.1 266.156C276.837 266.525 283.622 269.174 289.601 273.769C295.58 278.363 300.485 284.698 303.698 291.976Z"
                          fill="#E6E6E6"
                        />
                        <path
                          id="Vector_34"
                          d="M277.749 291.597L282.314 291.375L293.074 309.936L289.836 322.953C285.192 319.404 282.449 315.87 279.716 310.587C276.983 305.304 278.038 297.583 277.749 291.597Z"
                          fill="#D93232"
                        />
                        <path
                          id="Vector_35"
                          d="M330.687 358.447L336.142 372.192L315.849 369.267L314.679 367.732L310.399 359.49L330.687 358.447Z"
                          fill="#D93232"
                        />
                      </g>
                      <path
                        id="Vector_36"
                        d="M276.643 267.965L277.249 266.895L280.326 266.895L277.249 303.769L272.592 340.81C269.3 329.5 268.604 316.44 270.13 303.769C271.657 291.098 270.596 279.525 276.643 267.965Z"
                        fill="#D93232"
                      />
                      <path
                        id="Vector_37"
                        d="M196.258 270.065L195.652 268.995L192.575 268.995L195.652 305.868L200.309 342.91C203.601 331.6 204.297 318.539 202.77 305.868C201.244 293.197 202.305 281.625 196.258 270.065Z"
                        fill="#D93232"
                      />
                      <path
                        id="Vector_38"
                        d="M251.288 350.244H221.756L213.318 296.332L190.817 269.56L193.981 267.359L216.834 294.865L225.975 345.843H247.421L255.507 294.865L281.172 265.525L283.633 267.359L258.32 296.332L254.804 323.288L251.288 350.244Z"
                        fill="#2F2E41"
                        fill-opacity="0.28"
                      />
                      <path
                        id="Vector_39"
                        d="M251.991 345.843H222.459L214.021 291.931L191.52 265.159L194.684 262.958L217.537 290.464L226.678 341.442H248.124L256.21 290.464L281.875 261.125L284.336 262.958L259.023 291.931L255.507 318.887L251.991 345.843Z"
                        fill="black"
                        fill-opacity="0.42"
                      />
                    </g>
                    <g id="leftarmastro" filter="url(#filter3_d)">
                      <path
                        id="Vector_40"
                        d="M287.634 302.173L308.182 298.618C310.708 298.181 313.287 298.607 315.554 299.835C317.821 301.063 319.66 303.032 320.81 305.46C321.739 307.422 322.183 309.613 322.101 311.824C322.019 314.035 321.413 316.195 320.34 318.099C319.267 320.003 317.764 321.589 315.97 322.708C314.177 323.826 312.153 324.439 310.09 324.49L299.96 324.74L222.59 349.377C194.869 343.518 188.159 291.825 182 286.5C184.319 294.634 180.094 279.816 182 286.5L182 274.5L193.5 268L222.59 298.618L229 324.74L287.634 302.173Z"
                        fill="#E6E6E6"
                      />
                      <path
                        id="Vector_41"
                        d="M193 268L191 270L192.301 281.587L212.22 305.547L226.5 313C223.485 305.499 218.185 289.903 212.879 284.861C207.573 279.819 199.562 269.599 193 268Z"
                        fill="#D93232"
                      />
                      <path
                        id="Vector_42"
                        d="M284.01 330.488L298.724 327.096L286.234 304.399L284.317 304.092L275 304.892L284.01 330.488Z"
                        fill="#D93232"
                      />
                    </g>
                    <path
                      id="Vector_43"
                      opacity="0.2"
                      d="M211 283L229.813 326.833C229.813 326.833 226.223 286.847 211 283Z"
                      fill="black"
                    />
                    <path
                      id="Vector_44"
                      opacity="0.2"
                      d="M229.391 327.719L279.577 305.912C279.577 305.912 251.374 311.885 229.391 327.719Z"
                      fill="black"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="186.443"
                    y="237.381"
                    width="97.3031"
                    height="58.1496"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d"
                    x="192.883"
                    y="445.232"
                    width="36.762"
                    height="18.2642"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d"
                    x="242.74"
                    y="445.232"
                    width="36.7543"
                    height="17.0903"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d"
                    x="171.568"
                    y="267.014"
                    width="157.454"
                    height="99.0473"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="363.193"
                    y1="260.8"
                    x2="424.234"
                    y2="260.8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3A45A7" />
                    <stop offset="1" stop-color="white" stop-opacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="352.746"
                    y1="461.154"
                    x2="411.588"
                    y2="444.156"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3A45A7" />
                    <stop offset="1" stop-color="white" stop-opacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="290.937"
                    y1="75.5902"
                    x2="342.424"
                    y2="109.884"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3A45A7" />
                    <stop offset="1" stop-color="white" stop-opacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="75.4627"
                    y1="197.122"
                    x2="127.817"
                    y2="229.951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3A45A7" />
                    <stop offset="1" stop-color="white" stop-opacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear"
                    x1="235.819"
                    y1="187.775"
                    x2="235.819"
                    y2="269.927"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9DA2DF" />
                    <stop offset="0.390625" stop-color="#9293A3" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect
                      width="16.7607"
                      height="7.08786"
                      fill="white"
                      transform="translate(228.664 245.021)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Fade>
        </Container>
      </section>
    </>
  );
};
