import React from 'react';
import Particles from 'react-particles-js';

import mdiCharity from '../node_modules/@mdi/svg/svg/charity.svg';
import mdiControllerClassic from '../node_modules/@mdi/svg/svg/controller-classic.svg';
import mdiControllerClassicOutline from '../node_modules/@mdi/svg/svg/controller-classic-outline.svg';
import mdiDiceMultiple from '../node_modules/@mdi/svg/svg/dice-multiple.svg';
import mdiDiceMultipleOutline from '../node_modules/@mdi/svg/svg/dice-multiple-outline.svg';
import mdiGamepadSquare from '../node_modules/@mdi/svg/svg/gamepad-square.svg';
import mdiGamepadSquareOutline from '../node_modules/@mdi/svg/svg/gamepad-square-outline.svg';
import mdiGamepadVariant from '../node_modules/@mdi/svg/svg/gamepad-variant.svg';
import mdiGamepadVariantOutline from '../node_modules/@mdi/svg/svg/gamepad-variant-outline.svg';
import mdiGhost from '../node_modules/@mdi/svg/svg/ghost.svg';
import mdiGoogleController from '../node_modules/@mdi/svg/svg/google-controller.svg';
import mdiHeart from '../node_modules/@mdi/svg/svg/heart.svg';
import mdiHeartOutline from '../node_modules/@mdi/svg/svg/heart-outline.svg';
import mdiOcarina from '../node_modules/@mdi/svg/svg/ocarina.svg';
import mdiOneUp from '../node_modules/@mdi/svg/svg/one-up.svg';
import mdiPacMan from '../node_modules/@mdi/svg/svg/pac-man.svg';
import mdiSpaceInvaders from '../node_modules/@mdi/svg/svg/space-invaders.svg';
import mdiStarFace from '../node_modules/@mdi/svg/svg/star-face.svg';
import mdiSword from '../node_modules/@mdi/svg/svg/sword.svg';
import mdiSwordCross from '../node_modules/@mdi/svg/svg/sword-cross.svg';
import mdiTriforce from '../node_modules/@mdi/svg/svg/triforce.svg';

import classes from './style.module.scss';

function Background() {
  return (
    <Particles
      className={classes.background}
      height='150vh'
      params={{
        particles: {
          line_linked: {
            opacity: 0
          },
          move: {
            direction: 'top',
            out_mode: 'out'
	        },
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 200
            }
	        },
          shape: {
            type: 'images',
            image: [
              { src: mdiCharity, height: 20, width: 20 },
              { src: mdiControllerClassic, height: 20, width: 20 },
              { src: mdiControllerClassicOutline, height: 20, width: 20 },
              { src: mdiDiceMultiple, height: 20, width: 20 },
              { src: mdiDiceMultipleOutline, height: 20, width: 20 },
              { src: mdiGamepadSquare, height: 20, width: 20 },
              { src: mdiGamepadSquareOutline, height: 20, width: 20 },
              { src: mdiGamepadVariant, height: 20, width: 20 },
              { src: mdiGamepadVariantOutline, height: 20, width: 20 },
              { src: mdiGhost, height: 20, width: 20 },
              { src: mdiGoogleController, height: 20, width: 20 },
              { src: mdiHeart, height: 20, width: 20 },
              { src: mdiHeartOutline, height: 20, width: 20 },
              { src: mdiOcarina, height: 20, width: 20 },
              { src: mdiOneUp, height: 20, width: 20 },
              { src: mdiPacMan, height: 20, width: 20 },
              { src: mdiSpaceInvaders, height: 20, width: 20 },
              { src: mdiStarFace, height: 20, width: 20 },
              { src: mdiSword, height: 20, width: 20 },
              { src: mdiSwordCross, height: 20, width: 20 },
              { src: mdiTriforce, height: 20, width: 20 }
            ]
          },
	        size: {
            value: 30,
            random: true
	        }
        }
      }}
      width='100vw'
    />
  );
}

export default Background;
