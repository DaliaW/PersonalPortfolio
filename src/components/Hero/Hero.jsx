import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import styles from '../../style/vendor/css/style.css';
import style from '../Hero/style_icon.css'

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  var date = new Date();
    var hrs = date.getHours();
    var greet;

    if (hrs < 12)
    greet = 'Good Morning!'
    else if (hrs >=12 && hrs <=16)
    greet = 'Good Afternoon!'
    else if (hrs >=17 && hrs <=24)
    greet = 'Good Evening!'

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
      
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">

      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="greet">{greet}</h1>
          <h1 className="hero-title">
          <span class="wave">✋ </span>
            {title || 'Hi, I am'}{' '}
            <span className="text-color-main">{name || 'Dalia'}</span>
      
            <br /></h1>
            {subtitle ||<p> <h2 className="motto"> I code and design beautifully simple websites/Apps, and I'm passionate about what I do.</h2></p>
            
          }
            
          
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
          </div>
          <div className="icons">
          <a className="github" href="https://github.com/DaliaW/" target="_blank"><img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png" alt="Github" width="30" height="30"></img></a>
            <a className="linkedin" href="https://www.linkedin.com/in/dalia-walid-63a74b190/" target="_blank"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_in-256.png" alt="LinkedIn" width="30" height="30"></img></a> 
            {/* <a className="Twitter" href="https://twitter.com/DaliaWalid9" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="twitter" width="30" height="30"></img></a> */}
            <a className="behance" href="https://www.behance.net/daliaWalid/" target="_blank"><img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/behance-128.png" alt="Behance" width="30" height="30"></img></a>
            </div>
        </Fade>
        
      </Container>

     <Container> 

        
      <div class="svg-container">
    <svg viewBox="0 0 748 669" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="hello" clip-path="url(#clip0)">
<g id="laptop">
<path id="Vector" d="M374.046 0.982014L736.821 183.371C739.837 184.888 742.339 187.261 744.013 190.193C745.686 193.125 746.458 196.485 746.231 199.854L725.154 512.058C725.059 513.458 724.619 514.813 723.873 516.002C723.128 517.191 722.099 518.177 720.879 518.871C719.66 519.566 718.287 519.948 716.884 519.982C715.481 520.017 714.091 519.704 712.839 519.071L341.792 329.707L360.841 8.59276C360.93 7.08436 361.393 5.62181 362.187 4.33645C362.982 3.0511 364.083 1.9832 365.392 1.22866C366.701 0.474127 368.178 0.0565817 369.688 0.0135308C371.198 -0.0295202 372.696 0.30327 374.046 0.982014Z" fill="#D0CDE1"/>
<g id="plant">
<g id="leaves">
<path id="Vector_2" opacity="0.6" d="M59.2138 345.228C59.2138 345.228 48.4912 269.876 72.1938 172.736" stroke="#535461" stroke-width="3" stroke-miterlimit="10"/>
<path id="Vector_3" d="M57.2718 303.167C57.2718 303.167 54.9806 265.791 79.8118 258.528C79.8118 258.528 70.7427 310.72 57.2379 320.026L57.2718 303.167Z" fill="#49EB9D"/>
<g id="leavesg2">
<path id="Vector_4" d="M71.0028 177.729C71.0028 177.729 79.2479 154.125 99 161.388C99 161.388 82.6735 206.109 67.961 191.465L71.0028 177.729Z" fill="#54FFAD"/>
<path id="Vector_5" d="M65.7764 202.777C65.7764 202.777 65.1387 178.637 48.7726 172.282C48.7726 172.282 50.4657 224.938 63.4456 216.313L65.7764 202.777Z" fill="#49EB9D"/>
<path id="Vector_6" opacity="0.3" d="M68.243 191.801C68.243 191.801 89.6881 165.473 98.7177 160.934" stroke="#535461" stroke-miterlimit="10"/>
<path id="Vector_7" opacity="0.3" d="M48.7726 172.282C48.7726 172.282 64.5743 206.781 63.4456 215.859" stroke="#535461" stroke-miterlimit="10"/>
</g>
<g id="leavesg1">
<path id="Vector_8" d="M60.4262 238.428C60.4262 238.428 63.4454 213.136 95.0488 202.241C95.0488 202.241 84.9696 254.552 58.9702 252.455L60.4262 238.428Z" fill="#54FFAD"/>
<path id="Vector_9" d="M57.865 266.817C57.865 266.817 61.189 240.371 41.4369 215.859C41.4369 215.859 19.9917 274.57 56.9451 285.609L57.865 266.817Z" fill="#54FFAD"/>
<path id="Vector_10" opacity="0.3" d="M58.931 252.173C58.931 252.173 84.8909 207.688 95.0491 202.241" stroke="#535461" stroke-miterlimit="10"/>
<path id="Vector_11" opacity="0.3" d="M41.4364 215.859C41.4364 215.859 49.9016 277.593 56.6737 285.764" stroke="#535461" stroke-miterlimit="10"/>
</g>
<path id="Vector_12" opacity="0.3" d="M57.2377 320.262C57.2377 320.262 70.782 260.344 79.8116 258.528" stroke="#535461" stroke-miterlimit="10"/>
</g>
<g id="Vector_13" filter="url(#filter0_d)">
<path d="M34.8487 323H81.1063C81.1063 323 90.232 356.783 76.0715 407H39.5688C39.5688 407 26.3523 372.304 34.8487 323Z" fill="url(#paint0_linear)"/>
</g>
</g>
<path id="Vector_14" d="M378.221 7.34409L732.085 185.254C735.027 186.733 737.468 189.047 739.101 191.907C740.733 194.767 741.486 198.045 741.264 201.331L720.705 505.867C720.613 507.233 720.184 508.554 719.456 509.714C718.729 510.874 717.725 511.835 716.536 512.513C715.346 513.19 714.007 513.563 712.639 513.597C711.27 513.631 709.914 513.325 708.692 512.707L346.759 327.995L365.34 14.7679C365.428 13.2966 365.879 11.8699 366.654 10.6161C367.429 9.36235 368.503 8.32069 369.78 7.58468C371.057 6.84868 372.497 6.44139 373.97 6.3994C375.444 6.3574 376.904 6.68202 378.221 7.34409Z" fill="#3F3D56"/>
<path id="Vector_15" d="M393.729 30.9746L714.496 192.244C717.164 193.585 719.376 195.683 720.856 198.276C722.336 200.868 723.018 203.84 722.817 206.818L704.181 482.871C704.097 484.109 703.708 485.307 703.049 486.358C702.389 487.409 701.48 488.281 700.401 488.895C699.323 489.509 698.109 489.847 696.869 489.878C695.628 489.908 694.399 489.631 693.292 489.072L365.21 321.635L382.053 37.7041C382.132 36.3703 382.541 35.0771 383.244 33.9406C383.946 32.8041 384.92 31.8599 386.078 31.1927C387.235 30.5255 388.54 30.1563 389.876 30.1183C391.212 30.0802 392.536 30.3745 393.729 30.9746Z" fill="url(#paint1_linear)"/>
<path id="Vector_16" d="M411.024 51.7777L670.77 190.997C672.93 192.155 674.722 193.966 675.92 196.204C677.119 198.443 677.672 201.008 677.509 203.58L662.451 441.95C662.383 443.019 662.068 444.053 661.535 444.961C661.001 445.869 660.265 446.622 659.391 447.152C658.518 447.683 657.536 447.974 656.531 448.001C655.527 448.028 654.532 447.789 653.635 447.305L389 316L388 315L388 313L401.57 57.5897C401.634 56.4381 401.965 55.3214 402.534 54.3399C403.103 53.3585 403.891 52.543 404.828 51.9668C405.765 51.3906 406.822 51.0717 407.904 51.0387C408.985 51.0056 410.057 51.2596 411.024 51.7777Z" fill="#423E6C"/>
<path id="Vector_17" d="M362.709 329.229L710.533 503.729C713.425 505.18 710.77 507.797 712.33 508.696C713.891 509.594 707.789 518.357 707.498 518.403L692.287 513.039C702.047 516.481 691.711 512.917 690.963 512.628C699.892 515.721 689.197 511.911 688 511.383C694.375 513.775 685.464 510.242 684.104 509.6C682.743 508.959 701.093 516.324 699.892 515.721L329.58 332.625L349.747 323.512C349.866 323.486 350.345 323.633 351.143 323.94C351.94 324.247 353.03 324.704 354.315 325.271C355.6 325.838 357.04 326.496 358.505 327.187C359.97 327.878 361.415 328.579 362.709 329.229Z" fill="#75738E"/>
<path id="Vector_18" d="M62.7458 483.331L425.984 666.263C429.364 667.963 433.096 668.845 436.88 668.84C440.664 668.836 444.394 667.943 447.77 666.234L716.483 529.827C719.634 526.676 719.194 522.006 718.186 518.501C717.697 516.803 717.031 515.162 716.199 513.604L679.582 494.345L371.71 340.735L353.316 330.97C348.447 328.392 343.024 327.033 337.514 327.011C332.004 326.988 326.571 328.303 321.68 330.843L62.6322 465.405C60.984 466.257 59.6038 467.549 58.6441 469.137C57.6844 470.725 57.1827 472.548 57.1945 474.403C57.2062 476.258 57.731 478.074 58.7108 479.65C59.6905 481.226 61.087 482.5 62.7458 483.331Z" fill="#D0CDE1"/>
<path id="Vector_19" opacity="0.1" d="M407.517 538.141L289.881 478.696C287.513 477.499 284.892 476.89 282.238 476.92C279.585 476.951 276.978 477.619 274.637 478.869L206.397 515.327C205.608 515.748 204.951 516.378 204.495 517.147C204.04 517.917 203.805 518.796 203.816 519.69C203.826 520.584 204.082 521.458 204.555 522.216C205.028 522.975 205.701 523.589 206.499 523.991L326.44 584.474C328.432 585.478 330.64 585.977 332.87 585.926C335.099 585.874 337.283 585.275 339.226 584.18L407.739 545.581C408.407 545.205 408.959 544.653 409.336 543.986C409.713 543.318 409.9 542.56 409.877 541.794C409.854 541.028 409.622 540.282 409.206 539.638C408.79 538.995 408.206 538.477 407.517 538.141Z" fill="black"/>
<path id="Vector_20" opacity="0.1" d="M684.565 528.199L557.979 595.448C556.523 596.222 554.902 596.635 553.252 596.651C551.603 596.668 549.974 596.288 548.502 595.544L190.842 414.674C189.834 414.164 188.988 413.384 188.398 412.42C187.809 411.457 187.499 410.349 187.504 409.22C187.509 408.09 187.828 406.985 188.426 406.026C189.024 405.068 189.876 404.295 190.888 403.795L314.503 342.612C316.366 341.689 318.418 341.213 320.497 341.221C322.575 341.228 324.624 341.719 326.48 342.654L684.51 523.046C684.985 523.285 685.385 523.651 685.666 524.102C685.948 524.554 686.1 525.074 686.105 525.606C686.111 526.138 685.971 526.661 685.699 527.118C685.427 527.576 685.035 527.95 684.565 528.199Z" fill="black"/>
<path id="Vector_21" opacity="0.1" d="M670.505 530.003L547.626 595.822C546.212 596.579 544.638 596.983 543.037 596.999C541.436 597.016 539.855 596.644 538.426 595.915L191.24 418.891C190.261 418.392 189.44 417.629 188.868 416.686C188.296 415.743 187.995 414.658 188 413.553C188.005 412.448 188.315 411.366 188.895 410.428C189.475 409.49 190.303 408.734 191.285 408.243L311.28 348.361C313.088 347.459 315.08 346.993 317.098 347C319.116 347.007 321.104 347.488 322.906 348.403L670.451 524.959C670.912 525.194 671.301 525.551 671.574 525.993C671.847 526.435 671.994 526.944 672 527.465C672.005 527.985 671.869 528.497 671.605 528.945C671.342 529.393 670.961 529.759 670.505 530.003Z" fill="black"/>
<path id="code1" d="M430.656 112L430.021 113.27L582.124 189.321L582.759 188.051L430.656 112Z" fill="#FF6363"/>
<path id="code2" d="M430.646 129.066L430 130.329L561.839 197.767L562.484 196.505L430.646 129.066Z" fill="#6C63FF"/>
<path id="code3" d="M430.646 146L430 147.264L512.386 189.361L513.032 188.096L430.646 146Z" fill="#75DD64"/>
<path id="code4" d="M422.656 180L422.021 181.27L525.011 232.764L525.645 231.495L422.656 180Z" fill="#FF6363"/>
<path id="code5" d="M422.646 197.066L422 198.329L538.413 257.877L539.059 256.614L422.646 197.066Z" fill="#6C63FF"/>
<path id="code6" d="M422.646 218L421.902 219.455L504.822 261.824L505.566 260.369L422.646 218Z" fill="#75DD64"/>
<path id="code7" d="M418.656 245L418.021 246.27L534.403 304.46L535.038 303.191L418.656 245Z" fill="#FF6363"/>
<path id="code8" d="M418.646 262.066L418 263.329L534.413 322.877L535.059 321.614L418.646 262.066Z" fill="#6C63FF"/>
<path id="code9" d="M418.646 282L418 283.264L484.698 317.344L485.344 316.08L418.646 282Z" fill="#75DD64"/>
<path id="Vector_22" opacity="0.1" d="M62.7458 483.331L425.984 666.263C429.364 667.963 433.096 668.845 436.88 668.84C440.664 668.836 444.394 667.943 447.77 666.234L716.483 529.827C719.634 526.676 719.194 522.006 718.186 518.501L450.276 657.754C447.007 659.453 443.382 660.356 439.698 660.387C436.014 660.419 432.374 659.579 429.076 657.936L57.3241 472.729C56.9746 474.843 57.3126 477.015 58.2885 478.923C59.2644 480.831 60.8267 482.376 62.7458 483.331Z" fill="black"/>
<g id="earphone">
<g id="Vector_23" filter="url(#filter1_d)">
<path d="M546.575 652.938C572.262 672.927 608.367 669.494 627.216 645.271C646.066 621.047 640.522 585.206 614.835 565.217C589.147 545.229 553.043 548.662 534.193 572.885C515.344 597.109 520.887 632.95 546.575 652.938Z" fill="#16116F"/>
</g>
<g id="Vector_24" filter="url(#filter2_d)">
<path d="M558.568 645.702C576.003 659.269 601.135 656.133 614.702 638.698C628.269 621.263 625.133 596.132 607.698 582.565C590.263 568.998 565.132 572.134 551.565 589.568C537.998 607.003 541.134 632.135 558.568 645.702Z" fill="#931717"/>
</g>
<path id="Vector_25" d="M680.323 558.136C680.323 558.136 669.997 593.67 629.277 580.306L620.52 583.156L627.514 615.319C627.514 615.319 681.624 596.516 689.443 580.971C689.443 580.971 696.283 564.327 680.323 558.136Z" fill="#241D99"/>
<g id="Vector_26" filter="url(#filter3_d)">
<path d="M562.622 642.739C577.878 654.61 599.868 651.866 611.739 636.611C623.61 621.355 620.866 599.365 605.611 587.494C590.355 575.623 568.365 578.367 556.494 593.622C544.623 608.878 547.367 630.868 562.622 642.739Z" fill="#2017B7"/>
</g>
<g id="Vector_27" filter="url(#filter4_d)">
<path d="M568.73 637.814C579.627 646.293 595.334 644.333 603.814 633.436C612.293 622.54 610.333 606.832 599.436 598.353C588.54 589.874 572.832 591.834 564.353 602.73C555.874 613.627 557.834 629.334 568.73 637.814Z" fill="#E7E6F5" fill-opacity="0.74"/>
</g>
<path id="Vector_28" d="M684.893 587.328L685.569 570.281L675.215 560.027C705.693 525.885 702.99 506.545 702.99 506.545L700.583 504.336L690.107 494.711L683.436 459.854L687.519 454.607C714.777 480.598 721.882 505.198 719.879 525.992C716.473 562.569 684.893 587.328 684.893 587.328Z" fill="#150E8A"/>
<path id="Vector_29" opacity="0.1" d="M705.839 497.779L700.679 504.411L690.202 494.785L683.532 459.928C683.532 459.928 711.298 491.432 705.839 497.779Z" fill="black" stroke="#4C4981" stroke-miterlimit="10"/>
<path id="Vector_30" opacity="0.1" d="M684.893 587.327L685.569 570.281L719.924 526.131C716.472 562.569 684.893 587.327 684.893 587.327Z" fill="black" stroke="#4C4981" stroke-miterlimit="10"/>
<path id="Vector_31" d="M615.939 465.511C615.939 465.511 578.435 460.825 575.014 502.658L568.89 509.405L541.365 490.483C541.365 490.483 580.325 449.261 598.03 448.345C598.03 448.345 616.383 448.74 615.939 465.511Z" fill="#1F18A0"/>
<path id="Vector_32" d="M590.64 447.966L606.951 454.057L612.534 467.388C656.647 453.422 673.789 463.45 673.789 463.45L674.922 466.48L679.866 479.674L710.055 499.363L716.598 497.756C702.843 463.056 682.48 447.007 662.12 440.636C626.353 429.324 590.64 447.966 590.64 447.966Z" fill="#150E8A"/>
<path id="Vector_33" opacity="0.1" d="M590.258 449.935L606.569 456.026L661.626 442.51C625.971 431.293 590.258 449.935 590.258 449.935Z" fill="black" stroke="#1A1662" stroke-miterlimit="10"/>
<g id="Vector_34" filter="url(#filter5_d)">
<path d="M508.464 553.828C520.921 567.681 547.696 560.381 568.267 537.522C588.839 514.663 595.416 484.902 582.958 471.049C570.5 457.196 543.725 464.497 523.154 487.356C502.583 510.214 496.006 539.975 508.464 553.828Z" fill="#16116E"/>
</g>
<path id="Vector_35" d="M568.155 507.412C562.092 521.63 539.964 540.417 533.519 542.072C520.655 547 517 539 520.655 519.412C526.726 505.184 538.5 497 553.655 485.412C568.155 482.5 574.237 493.162 568.155 507.412Z" fill="#171717"/>
<path id="Vector 1" d="M579 599L579 607.456L579 615.911L579 631C579 631 598 635.309 598 623.869" stroke="#931717" stroke-width="5"/>
<path id="Vector 2" d="M579 622.035C579.54 613.163 600.482 613.5 597.991 623.5C595.5 633.5 597.991 624.004 597.991 624.004" stroke="#931717" stroke-width="5"/>
</g>
</g>
<g id="me">
<g id="me_2">
<g id="static">
<g id="legleft2" filter="url(#filter6_d)">
<path id="Vector_36" d="M147.507 537.34C147.507 537.34 128.607 566.617 120.906 564.945C113.206 563.273 109.536 584.301 110.182 589.577C110.828 594.853 112.71 606.816 102.404 621.269C98.8046 626.317 97.8609 632.725 98.1571 638.927C98.9867 656.305 117.167 655.042 120.437 637.352C120.473 637.157 120.508 636.96 120.542 636.762C123.947 616.959 137.447 587.794 145.889 581.924C154.332 576.054 164.58 557.738 164.58 557.738L147.507 537.34Z" fill="#FFB8B8"/>
<path id="Vector_37" d="M128.073 586.844C128.073 586.844 126.545 566.046 118.636 564.328C110.726 562.611 107.942 585.559 108.642 590.812C109.342 596.064 111.697 606.621 101.229 620.924C97.5729 625.921 97.6175 633.809 97.9649 639.981C98.9382 657.273 117.576 656.145 120.805 638.571C120.841 638.377 120.875 638.182 120.909 637.985C124.261 618.311 138.467 587.542 147.084 581.763C152.215 575.492 137.845 588.966 137.845 588.966L128.073 586.844Z" fill="#3F3D56"/>
</g>
<g id="legleft1" filter="url(#filter7_d)">
<path id="Vector_38" d="M173.442 548.141C173.442 548.141 185.949 580.761 193.99 580.761C202.03 580.761 201.137 602.09 199.35 607.108C197.563 612.127 193.096 623.418 200.244 639.729C202.74 645.426 202.293 651.888 200.655 657.886C196.065 674.692 178.21 669.601 178.779 651.619C178.785 651.42 178.793 651.221 178.802 651.02C179.695 630.946 172.548 599.581 165.401 592.053C158.254 584.525 152 564.451 152 564.451L173.442 548.141Z" fill="#FFB8B8"/>
<path id="Vector_39" d="M188.487 571.141C188.487 571.141 187.026 579.501 195.028 579.501C203.03 579.501 202.141 600.893 200.363 605.926C198.585 610.96 194.139 622.285 201.252 638.644C203.737 644.358 203.292 650.84 201.662 656.856C197.094 673.712 177.035 673.677 177.602 655.641C177.65 658.141 177.602 657.111 177.602 649.141C178.491 629.007 170.202 597.318 163.089 589.768C155.976 582.218 169.309 586.902 169.309 586.902H177.602L188.487 571.141Z" fill="#3F3D56"/>
</g>
<g id="jeap">
<path id="Vector_40" d="M218.113 360.125L240 388.544C240 388.544 242.089 399.13 235 441.544C227.911 483.958 254.817 573.039 249.5 570.544C235 588 216.341 591.751 215.455 570.544C214.569 549.337 218.113 570.544 218.113 570.544H215.455H202.5L184.5 564.215C184.5 564.215 166.717 551.832 149.88 570.544C133.043 589.256 96.1804 566.623 92.6358 559.138C90.8236 555.311 87.2195 505.099 84.2365 466.08C81.3848 428.778 105 416.957 118.395 376.342L133.043 385.074L149.88 351.393L215.455 346.403L218.113 360.125Z" fill="#2F2E41"/>
<path id="Vector_41" opacity="0.2" d="M196.896 401.87L185 443.641L165.442 488.534C165.442 488.534 184.866 411.65 196.896 401.87Z" fill="black"/>
<path id="Vector_42" opacity="0.2" d="M219.925 484.043L225.621 527.1L225.529 576.068C225.529 576.068 212.776 497.8 219.925 484.043Z" fill="black"/>
<g id="legmovin">
<path id="Vector_43" opacity="0.2" d="M153 463.141L173 553.141C173 553.141 163.667 474.392 153 463.141Z" fill="black"/>
<path id="Vector_44" opacity="0.2" d="M127 431.433L166.687 518.853C166.687 518.853 141.453 433.803 127 431.433Z" fill="black"/>
<path id="Vector_45" opacity="0.2" d="M147.344 556.297L100.5 487.846C100.5 487.846 132.971 556.697 147.344 556.297Z" fill="black"/>
</g>
</g>
<path id="Vector_46" d="M195.216 220C195.216 220 185.554 232.205 183.797 234.239C182.04 236.273 174.135 247.461 157.446 231.188C140.757 214.915 139 234.239 139 234.239V356.289C139 356.289 153.054 349.169 164.473 356.289C175.892 363.408 199.608 354.255 199.608 354.255L204 228.137L195.216 220Z" fill="#E3DEFF"/>
<path id="Vector_47" d="M153.782 220C153.782 220 135.105 222.03 134.215 224.06C133.325 226.091 107.109 235.088 108.889 244.224C110.669 253.36 134.215 334.705 123.536 349.932C112.858 365.158 95.0602 386.475 101.289 388.505C107.519 390.536 118.197 385.46 128.876 388.505C139.554 391.551 164.471 366.173 161.801 338.766C159.132 311.358 161.78 227.106 153.782 220Z" fill="#3F3D56"/>
<path id="Vector_48" opacity="0.2" d="M134 254L154 371C154 371 147.608 260.749 134 254Z" fill="black"/>
</g>
<g id="rightarm" filter="url(#filter8_d)">
<g id="hand">
<path id="Vector_49" d="M192.34 402.977C192.34 402.977 193.706 409.04 175.242 419.574L172.63 423.189L172.549 428.093L170.321 437.453L167.247 448.006C166.765 449.664 167.644 451.16 169.356 451.448C168.933 451.121 171.233 450.803 172.259 447.516C173.449 443.703 173.542 436.916 175.472 437.638C175.472 437.638 167.365 464.445 174.79 454.364C174.79 454.364 186.612 455.209 186.913 450.296C186.913 450.296 188.3 445.039 190.921 442.24C193.542 439.441 202.822 421.47 202.822 421.47L207.54 412.778L192.34 402.977Z" fill="#FFB8B8"/>
<path id="Vector_50" opacity="0.2" d="M178.485 432L173.26 452.169C173.26 452.169 174.775 434.871 178.485 432Z" fill="black"/>
<path id="Vector_51" opacity="0.2" d="M182.242 435L180.305 444.271L178.848 453.247C178.848 453.247 179.269 437.693 182.242 435Z" fill="black"/>
<path id="Vector_52" opacity="0.2" d="M186.918 437L183.316 452.969C183.316 452.969 184.46 439.162 186.918 437Z" fill="black"/>
<path id="Vector_53" d="M180.332 416.251C180.332 416.251 177.907 418.918 174.529 420.685C171.458 422.292 169.032 425.186 168.187 428.437C167.499 431.088 164.549 431.902 167.179 434.187C167.179 434.187 170.874 433.846 171.725 430.403L173.421 427.518L174.954 425.606C174.954 425.606 181.109 430.458 185.156 425.001C189.204 419.544 189.76 417.93 189.76 417.93L180.332 416.251Z" fill="#FFB8B8"/>
</g>
<path id="arm" d="M231.569 232.013C231.569 232.013 203.853 220.149 198.217 236.195C195.585 243.688 235.242 287.017 231.569 326.187C218.5 367 198.217 387 186.894 410.905C192.33 411.599 209.121 416.254 211 410.905C211.876 408.411 253.31 369.395 257.942 326.187C263.244 276.728 231.569 232.013 231.569 232.013Z" fill="#3F3D56"/>
</g>
<g id="leftarm1" filter="url(#filter9_d)">
<g id="hand_2" filter="url(#filter10_d)">
<path id="Vector_54" d="M151.418 415.454C151.418 415.454 150.592 421.623 169.332 430.619L172.158 434.015L172.638 438.907L175.561 448.074L179.403 458.362C180.005 459.978 179.277 461.545 177.642 461.974C176.649 462.235 175.514 462.042 174.546 460.611C174.546 460.611 172.341 464.875 167.876 460.291C167.876 460.291 163.973 462.551 160.578 458.543C160.578 458.543 159.696 460.249 156.929 457.669C154.162 455.09 142.783 434.793 142.783 434.793L137.503 426.499L151.418 415.454Z" fill="#FFB8B8"/>
<path id="Vector_55" opacity="0.2" d="M167 445.141L173.997 465.292C173.997 465.292 170.99 447.759 167 445.141Z" fill="black"/>
<path id="Vector_56" opacity="0.2" d="M162 447.141L166.985 465.484C166.985 465.484 165.232 449.639 162 447.141Z" fill="black"/>
<path id="Vector_57" opacity="0.2" d="M156 449.141L161 465.141C161 465.141 158.667 451.141 156 449.141Z" fill="black"/>
<path id="Vector_58" d="M168.888 433.913C168.888 433.913 171.828 436.118 175.536 437.231C178.907 438.244 181.893 440.677 183.377 443.779C184.587 446.308 187.68 446.548 185.52 449.361C185.52 449.361 181.78 449.743 180.25 446.449L177.993 443.882L176.09 442.261C176.09 442.261 170.935 448.345 165.83 443.654C160.724 438.964 159.851 437.451 159.851 437.451L168.888 433.913Z" fill="#FFB8B8"/>
</g>
<path id="Vector_59" d="M128.472 232.141C128.472 232.141 107.273 232.141 108.121 242.662C108.581 248.372 81.7328 314.089 89.3672 364.029C95.7997 406.107 136.952 434.141 136.952 434.141C136.952 434.141 148.824 420.464 159 423.62L128.472 390.643L113.379 354.714L119.5 323.5L125.384 273.816L128.472 232.141Z" fill="#3F3D56"/>
</g>
</g>
<path id="chestmove" d="M201 236.141C201 236.141 197.776 259.89 227 237.641C222 244.141 234.102 232.342 233.5 242.641C232.898 252.939 211.6 337.479 231.327 368.5C251.054 399.521 226 382 226 382L219.5 368.5C219.5 368.5 184.67 358.16 185.638 343.27C186.605 328.38 201 236.141 201 236.141Z" fill="#3F3D56"/>
<path id="Vector_60" opacity="0.2" d="M212 245L192 362C192 362 198.392 251.749 212 245Z" fill="black"/>
<g id="head1">
<path id="Vector_61" d="M141.759 149.024C151.652 129.96 171.226 129.072 171.226 129.072C171.226 129.072 190.299 126.291 202.535 155.324C213.939 182.386 202.679 219.665 178.069 226L202.535 216.024C195.186 223.043 187.285 216.174 183.775 216.024C169.489 215.498 161.528 226.026 152.136 223.043C144.202 220.522 136.206 206.689 136.576 201.75C137.65 187.413 132.239 167.366 141.759 149.024Z" fill="#484671"/>
<path id="Vector_62" d="M201 243.141C191.278 262.835 172.184 257.574 172.184 257.574C172.184 257.574 153.068 260.697 140.467 231.088C137.479 224.065 134.703 231.865 134.5 224.141C133.904 201.513 145.885 163.349 164.251 158.245L139.802 168.824C147.102 161.521 168.659 201.994 172.184 202.099C186.531 202.437 180.856 157.985 190.316 160.913C198.309 163.386 206.487 177.463 206.17 182.534C205.699 190.05 210.915 221.538 211 231.088C211.081 240.243 205.579 233.866 201 243.141Z" fill="#484671"/>
<g id="face">
<path id="Vector_63" opacity="0.2" d="M181.496 246.746L204.825 224.263C204.825 224.263 200.106 237.127 181.496 246.746Z" fill="black"/>
<path id="Vector_64" opacity="0.2" d="M141 213.599L158.582 240.641C158.582 240.641 147.174 233.617 141 213.599Z" fill="black"/>
<path id="Vector_65" d="M172.5 213C187.095 213 198.927 198.819 198.927 181.326C198.927 163.834 187.095 149.653 172.5 149.653C157.904 149.653 146.073 163.834 146.073 181.326C146.073 198.819 157.904 213 172.5 213Z" fill="#FFB8B8"/>
<g id="mouth">
<g id="Frame 1" clip-path="url(#clip1)">
<path id="mouthsmile" d="M181.469 200.993C181.469 204.139 175.362 205.635 172.5 205.635C169.638 205.635 163.531 204.139 163.531 200.993C163.531 200.126 162.8 198.514 163.531 198.12C165.455 197.084 170.427 198.12 172.5 198.12C174.573 198.12 179.545 197.084 181.469 198.12C182.2 198.514 181.469 200.126 181.469 200.993Z" fill="#515050"/>
<path id="mouthsmile_2" d="M180.273 198.12C180.273 199.468 174.599 200.804 172.5 200.804C170.401 200.804 164.727 199.468 164.727 198.12C164.727 196.771 170.401 198.139 172.5 198.139C174.599 198.139 180.273 196.771 180.273 198.12Z" fill="white"/>
<path id="mouthsmile_3" d="M167.854 203.47C167.836 202.544 170.189 202.393 171.428 202.614C172.119 202.738 171.64 203.185 172.192 203.175C172.743 203.165 172.588 202.736 173.221 202.614C174.359 202.395 176.206 202.543 176.225 203.47C176.233 203.883 176.499 204.674 176.225 204.915C175.54 205.515 173.292 205.563 172.192 205.582C173.306 205.549 171.503 205.595 172.192 205.582C171.274 205.582 171.274 205.582 168.883 205.008C168.271 205.008 167.859 203.737 167.854 203.47Z" fill="#FF6363"/>
</g>
</g>
<path id="mouthsmile_4" d="M176.127 189.923C176.127 190.806 173.241 191.681 171.982 191.681C170.723 191.681 167.836 190.806 167.836 189.923C167.836 189.04 170.723 189.923 171.982 189.923C173.241 189.923 176.127 189.04 176.127 189.923Z" fill="#FFA3A3" fill-opacity="0.98"/>
<path id="lefteye" d="M164.727 180.357C164.727 179.032 161.882 177.72 160.064 177.72C158.245 177.72 155.4 179.032 155.4 180.357C155.4 181.682 158.245 179.33 160.064 179.33C161.882 179.33 164.727 181.682 164.727 180.357Z" fill="#535461"/>
<path id="lefteyebrow" d="M165.764 172.888C165.764 171.563 160.901 171.54 159.082 171.54C157.263 171.54 151.773 174.784 151.773 176.109C151.773 177.434 156.69 172.888 158.509 172.888C160.328 172.888 165.764 174.213 165.764 172.888Z" fill="#535461"/>
<path id="lefteyebrow_2" d="M180.273 172.625C180.273 171.301 185.135 171.278 186.954 171.278C188.773 171.278 193.745 174.248 193.745 175.572C193.745 176.897 189.346 172.625 187.527 172.625C185.708 172.625 180.273 173.95 180.273 172.625Z" fill="#535461"/>
<path id="righteye" d="M189.6 180.357C189.6 179.032 186.755 177.72 184.936 177.72C183.117 177.72 180.273 179.032 180.273 180.357C180.273 181.682 183.117 179.33 184.936 179.33C186.755 179.33 189.6 181.682 189.6 180.357Z" fill="#535461"/>
</g>
<path id="Vector_66" d="M145.995 161.261L155.158 149.979L166.921 147H178.683L188.842 149.979L199 163.682V180L195.708 175.597L189.654 168.973L184.462 163.682L178.683 159.392L176.154 158.327L174.077 157.795L171.481 158.327L169.404 159.392L167.327 160.456L161.096 164.714L145 180L145.995 161.261Z" fill="#F3F1FF"/>
<path id="Vector_67" d="M144.536 155.103L154.298 143.155L166.828 140H179.358L190.179 143.155L201 157.667L199.954 182L190.179 165.037L182.007 157.667L178.751 154.976L176.037 153.917L173.867 153.387L171.696 153.917L169.525 155.103L166.269 157.094L159.215 162.389L144 182L144.536 155.103Z" fill="#484671"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_d" x="28" y="323" width="60" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="519.011" y="552.211" width="123.388" height="121.734" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="539.131" y="574.131" width="88.0037" height="88.0037" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="545.115" y="580.115" width="78.0032" height="78.0032" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_d" x="555.082" y="593.082" width="58.0023" height="58.0023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter5_d" x="498.159" y="464.035" width="95.1027" height="104.808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter6_d" x="89.7285" y="531.401" width="82.313" height="135.665" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter7_d" x="148" y="548.141" width="59" height="129.196" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter8_d" x="162.107" y="227.791" width="100.433" height="236.84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter9_d" x="84" y="232.141" width="108.229" height="241.343" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter10_d" x="133.503" y="415.454" width="58.7253" height="58.0302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="58" y1="323" x2="58" y2="407" gradientUnits="userSpaceOnUse">
<stop stop-color="#66A9DA"/>
<stop offset="1" stop-color="#4D4B6C"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="387.5" y1="30" x2="682.5" y2="480" gradientUnits="userSpaceOnUse">
<stop offset="0.09375" stop-color="#A5B7F7"/>
<stop offset="0.317708" stop-color="#4D66E9"/>
<stop offset="0.75" stop-color="#C079D1"/>
<stop offset="0.994492" stop-color="#D977E9" stop-opacity="0.83"/>
<stop offset="0.994592" stop-color="#79C1D1"/>
<stop offset="0.994692" stop-color="#AA8CEA"/>
</linearGradient>
<clipPath id="clip0">
<rect width="747.758" height="668.841" fill="white"/>
</clipPath>
<clipPath id="clip1">
<rect width="23.8364" height="9.66314" fill="white" transform="translate(161.618 197.046)"/>
</clipPath>
</defs>
</svg>    
</div>


    </Container>
    </section>
  );
};

export default Header;
