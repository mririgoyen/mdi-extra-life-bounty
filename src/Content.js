import React from 'react';
import ReactGA, { OutboundLink } from 'react-ga';

import { ReactComponent as MdiVectorSquare } from '../node_modules/@mdi/svg/svg/vector-square.svg';
import { ReactComponent as MdiPlus } from '../node_modules/@mdi/svg/svg/plus.svg';
import { ReactComponent as MdiNumericOneCircle } from '../node_modules/@mdi/svg/svg/numeric-1-circle.svg';
import { ReactComponent as MdiNumericTwoCircle } from '../node_modules/@mdi/svg/svg/numeric-2-circle.svg';
import { ReactComponent as MdiNumericThreeCircle } from '../node_modules/@mdi/svg/svg/numeric-3-circle.svg';
import { ReactComponent as MdiNumericFourCircle } from '../node_modules/@mdi/svg/svg/numeric-4-circle.svg';
import { ReactComponent as MdiNumericFiveCircle } from '../node_modules/@mdi/svg/svg/numeric-5-circle.svg';
import { ReactComponent as MdiNumericSixCircle } from '../node_modules/@mdi/svg/svg/numeric-6-circle.svg';
import { ReactComponent as MdiNumericSevenCircle } from '../node_modules/@mdi/svg/svg/numeric-7-circle.svg';
import { ReactComponent as ExtraLife } from './extra-life.svg';

import classes from './style.module.scss';

function Content() {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <header>
          <ExtraLife className={classes.why} />
          <MdiPlus className={classes.plus} />
          <MdiVectorSquare className={classes.what} />
          <MdiPlus className={classes.plus} />
          <img
            alt='Michael Irigoyen'
            className={classes.who}
            src='https://avatars2.githubusercontent.com/u/1015040'
          />
        </header>
        <section>
          <h1>Get Icons, Heal Kids.</h1>
          <p>Looking to fast track your icon request for Material Design Icons? Make a donation to Extra Life and I'll make it happen.*</p>
          <h2>How to Donate</h2>
          <ol>
            <li>
              <MdiNumericOneCircle />
              <p><OutboundLink eventLabel='Fundraising Page' to='https://www.extra-life.org/participant/goyney' target='_blank' rel='noopener noreferrer'>Visit my fundraising page.</OutboundLink></p>
            </li>
            <li>
              <MdiNumericTwoCircle />
              <p>Click "DONATE".</p>
            </li>
            <li>
              <MdiNumericThreeCircle />
              <p>Check "Add a message" and put your GitHub user name in the text box.</p>
            </li>
            <li>
              <MdiNumericFourCircle />
              <p>Complete your donation.</p>
            </li>
            <li>
              <MdiNumericFiveCircle />
              <p><OutboundLink eventLabel='MDI GitHub' to='https://github.com/Templarian/MaterialDesign/issues' target='_blank' rel='noopener noreferrer'>Open a new issue on Material Design Icon's GitHub</OutboundLink> with your request.</p>
            </li>
            <li>
              <MdiNumericSixCircle />
              <p>Tag me in the request by typing <code>@goyney</code> and let me know you donated!</p>
            </li>
            <li>
              <MdiNumericSevenCircle />
              <p>I will work to get your request taken care of ASAP!</p>
            </li>
          </ol>
          <p className={classes.button}>
            <OutboundLink className={classes.button} eventLabel='Fundraising Page' to='https://www.extra-life.org/participant/goyney' target='_blank' rel='noopener noreferrer'>
              DONATE NOW
            </OutboundLink>
          </p>
          <h2>What is Extra Life?</h2>
          <p><OutboundLink eventLabel='About Extra Life' to='https://www.extra-life.org/about' target='_blank' rel='noopener noreferrer'>Extra Life</OutboundLink> is a fundraiser, much like Relay for Life, except it revolves around gaming. It’s a gaming marathon to support Children’s Miracle Network hospitals. These hospitals treat thousands of children each year, regardless of their illness, injury, or even their family’s ability to pay. These kids are facing scary stuff like cancer, cystic fibrosis, and injuries they may get from just being a kid.</p>
          <h2>Who am I?</h2>
          <p>My name is Michael Irigoyen and I am a Core Contributor to <OutboundLink eventLabel='Material Design Icons' to='https://materialdesignicons.com' target='_blank' rel='noopener noreferrer'>Material Design Icons</OutboundLink>, an open-source icon library touting over 5,500 carefully crafted icons which adhere to <OutboundLink eventLabel='Google Design Principles' to='https://material.io/design/iconography/system-icons.html#design-principles' target='_blank' rel='noopener noreferrer'>Google's Material Design Guidelines</OutboundLink>. I am also a Senior Software Engineer for <OutboundLink eventLabel='Accusoft' to='https://www.accusoft.com/' target='_blank' rel='noopener noreferrer'>Accusoft</OutboundLink>, a software development company based out of Tampa, FL.</p>
          <p>For the past seven years, I have been participating in the <OutboundLink eventLabel='About Extra Life' to='https://www.extra-life.org/about' target='_blank' rel='noopener noreferrer'>Extra Life</OutboundLink> fundraiser and have raised over $6000! It is a fantastic charity that I am very passionate about.</p>
          <p className={classes.disclaimer}>* A donation will guarantee I will work with you to fulfill your request to the best of my abilities as my top priority. The resulting icon or icons still must be accepted by the MDI contributors and the maintainer of Material Design Icons, Templarian. If your icon request is not deemed suitable for addition into the library, I will work with you to find another solution and bank your request for use on another new icon. Excludes brand icons.</p>
        </section>
      </div>
    </div>
  );
}

export default Content;
