import React from 'react';

import { ReactComponent as MdiVectorSquare } from '../node_modules/@mdi/svg/svg/vector-square.svg';
import { ReactComponent as MdiPlus } from '../node_modules/@mdi/svg/svg/plus.svg';
import { ReactComponent as ExtraLife } from './extra-life.svg';

import classes from './style.module.scss';

function Content() {
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
            <li><a href='https://www.extra-life.org/participant/goyney' target='_blank' rel='noopener noreferrer'>Visit my fundraising page.</a></li>
            <li>Click "DONATE".</li>
            <li>Check "Add a message" and put your GitHub user name in the text box.</li>
            <li>Complete your donation.</li>
            <li>Open a new issue on the Material Design Icons GitHub account with your request. Tag me in the request by typing "@goyney" and let me know you donated!</li>
            <li>I will work to get your request taken care of ASAP!</li>
          </ol>
          <h2>What is Extra Life?</h2>
          <p>Extra Life is a fundraiser, much like Relay for Life, except it revolves around gaming. It’s a gaming marathon to support Children’s Miracle Network hospitals. These hospitals treat thousands of children each year, regardless of their illness, injury, or even their family’s ability to pay. These kids are facing scary stuff like cancer, cystic fibrosis, and injuries they may get from just being a kid.</p>
          <h2>Who am I?</h2>
          <p>My name is Michael Irigoyen and I am a Core Contributor to <a href='https://materialdesignicons.com' target='_blank' rel='noopener noreferrer'>Material Design Icons</a>, an icon library touting over 5,500 carefully crafted icons which adhere to <a href='https://material.io/design/iconography/system-icons.html#design-principles' target='_blank' rel='noopener noreferrer'>Google's Material Design Guidelines</a>.</p>
          <p>For the past seven years, I have been participating in the <a href='https://www.extra-life.org/about' target='_blank' rel='noopener noreferrer'>Extra Life</a> fundraiser. Extra Life is a global event in which people come together to fundraise for kids in Children's Miracle Network Hospitals. It is a fantastic charity that I am very passionate about.</p>
          <p className={classes.disclaimer}>* A donation will guarantee I will work with you to fulfill your request to the best of my abilities as my top priority. The resulting icon or icons still must be accepted by the maintainer of Material Design Icons, Templarian. If your icon request is not deemed suitable for addition into the library, I will work with you to find another solution and bank your request for use on another new icon.</p>
        </section>
      </div>
    </div>
  );
}

export default Content;
