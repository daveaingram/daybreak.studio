import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Logo from '../components/Logo'

//let primary = '#333';
let primary = '#fff';
let sunColor = '#f7931e';
let styles = {
  width:'50%',
  margin: '18px 0 0 0',
  //fill: '#000'
}

export default function Header(props) {

  return (
    <svg id='Logo' dataname='Logo' xmlns='http://www.w3.org/2000/svg' style={styles}
viewBox='0 0 1356.56 163.37'>
    <path d='M757.31,150.22a5.4,5.4,0,1,0,5.4,5.4A5.38,5.38,0,0,0,757.31,150.22Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M1252.69,116.82a48.69,48.69,0,0,1-2.14,14.43q-3.1-.81-6.27-1.53a45.54,45.54,0,0,0,1.81-12.9c0-23.8-16.8-39.8-38.6-39.8s-38.6,16-38.6,39.8a44.48,44.48,0,0,0,2.48,14.93q-3.09.92-6.11,1.91a48.28,48.28,0,0,1-3-16.84c0-26.4,20-45.8,45.2-45.8S1252.69,90.42,1252.69,116.82Z'
    transform='translate(-13.4 -37.23)' fill={sunColor} />
    <path d='M819.1,93.22c-20.8-6-26.2-15.59-26.2-26.79,0-13.21,10-22.8,27-22.8,8.2,0,18.2,3.6,26.2,8.8l1.4-6c-6.4-4.6-17.2-9-27.6-9-20.6,0-34,13-34,29s10.6,27.79,30,33.19c24.2,7,31,16.2,31,30.4,0,16.2-13,26.4-29,26.4a53.27,53.27,0,0,1-34-12.8l-1.2,6.6c6.6,6.2,19.2,12.4,35.2,12.4,17.4,0,36-11,36-33.2C853.9,110.42,841.3,99.43,819.1,93.22Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M896.5,155.82c-8.2,0-11.4-4.4-11.4-19V79.43h21.6v-5.8H885.1V50l-6.6,1.4v22.2H865.3v5.8h13.2v55.39c0,18.4,3.2,27,16,27,7.2,0,11.8-2.2,15.6-5.6l-1-4.6A20.23,20.23,0,0,1,896.5,155.82Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M999.5,148V73.63h-6.6v52c0,16.6-19.6,30.6-35.4,30.6-13.6,0-23.8-6.8-23.8-28.4V73.63h-6.6v54.79c0,19.2,8,34,29.6,34,14.6,0,29.6-9.2,36.2-21.6v7c0,9.8,4.4,13.4,11,13.4a10.86,10.86,0,0,0,6.2-1.8V155a8.85,8.85,0,0,1-4.4,1.2C1001.5,156.22,999.5,154,999.5,148Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M1112.9,156.22c-4.2,0-6.2-2.2-6.2-8.2V37.23l-6.6,1.2V89.22c-10.6-14-24.2-18-36.6-18-21.4,0-40,17.21-40,45.6s18.6,45.6,40,45.6c12.2,0,25.8-3.8,36.6-18v3.4c0,9.8,4.2,13.4,11,13.4a10.86,10.86,0,0,0,6.2-1.8V155A9.51,9.51,0,0,1,1112.9,156.22ZM1100.1,136a41.48,41.48,0,0,1-35.2,20.4c-17.8,0-34.8-12.6-34.8-39.6s17-39.6,34.8-39.6a41.48,41.48,0,0,1,35.2,20.4Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M1138.7,50.23a5.2,5.2,0,1,0-5.2-5.2A5.29,5.29,0,0,0,1138.7,50.23Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M1142.1,72.83,1135.5,74v71.59c2.06-1,4.27-2,6.6-3Z' transform='translate(-13.4 -37.23)'
    />
    <path d='M1309.3,153.14c-17.88-7.5-37.35-16.29-58.75-21.89q-3.1-.81-6.27-1.53a159,159,0,0,0-35.32-4.14c-16.21,0-25.34,2.56-37.59,6.17q-3.09.92-6.11,1.91c-8.41,2.76-16.3,5.92-23.16,8.94-2.33,1-4.54,2-6.6,3-11.1,5.22-18.2,9.41-18.2,9.41v4.4q9.12-4.8,18.2-8.82c2.2-1,4.4-1.91,6.6-2.82a263,263,0,0,1,25.41-9c2.08-.62,4.13-1.23,6.17-1.74,7.73-1.92,15.5-5.27,33.81-5.94a126.9,126.9,0,0,1,34.89,3.77q3.06.74,6.21,1.61c17.77,4.88,37.34,12.47,59.71,20.68,40.2,14.76,61.66-6.56,61.66-6.56C1340.78,162.12,1325.71,160,1309.3,153.14Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M108.6,100.2c0,33-18.2,59.8-62.2,59.8h-33V40h33C90.4,40,108.6,67.2,108.6,100.2ZM20.2,46.4V153.6H46.6c41.2,0,55.2-25.2,55.2-53.4,0-28.4-14-53.8-55.2-53.8Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M203.4,160l-.2-22c-6,15.8-21.4,24.4-37,24.4-23.6,0-42-18.6-42-45.6s18.4-45.6,42-45.6c15.6,0,31,8.6,37,24.4l.2-22h6V160ZM166.8,77.2c-19.8,0-36,15-36,39.6,0,24.8,16.2,39.6,36,39.6,20,0,36.4-14.8,36.4-39.6C203.2,92.2,186.8,77.2,166.8,77.2Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M259.6,177.2c-6.4,16.2-11.2,23.4-20.4,23.4a14,14,0,0,1-6.6-1.6v-5.4A12.73,12.73,0,0,0,238,195c9.2,0,13-11,22.2-35.4l-34.8-86h7l31.2,78.2,31.2-78.2h6.6Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M317.59,40h6.6V94.6c6-14.8,21-23.4,36.6-23.4,23.6,0,42,18.6,42,45.6s-18.4,45.6-42,45.6c-15.6,0-31-8.6-37-24.4l-.2,22h-6Zm42.6,116.4c19.8,0,36-14.8,36-39.6,0-24.6-16.2-39.6-36-39.6-20,0-36.4,15-36.4,39.6C323.79,141.6,340.19,156.4,360.19,156.4Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M430.59,108v52H424V73.6h6l.2,19.4c6.2-14.2,21-21.4,32.8-21.8v7.4C446.59,77.6,430.59,91.6,430.59,108Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M546.39,103.4a52.72,52.72,0,0,1-.6,7.6H479.4c-1.81,23.8,9.39,45.4,38.79,45.4,10.4,0,21.2-4.8,27.6-10v6c-7,5.8-17.8,9.8-31.2,9.8-24.6,0-42-18.6-42-46.2,0-28.8,20.4-45,39.2-45C530.79,71,546.39,84.4,546.39,103.4Zm-34-26.8c-14,0-28.4,8.6-32.4,29.2h59.8s.2-2.8.2-4C540,88,528.79,76.6,512.39,76.6Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M642.39,160l-.2-22c-6,15.8-21.4,24.4-37,24.4-23.6,0-42-18.6-42-45.6s18.4-45.6,42-45.6c15.6,0,31,8.6,37,24.4l.2-22h6V160Zm-36.6-82.8c-19.8,0-36,15-36,39.6,0,24.8,16.2,39.6,36,39.6,20,0,36.4-14.8,36.4-39.6C642.19,92.2,625.79,77.2,605.79,77.2Z'
    transform='translate(-13.4 -37.23)' />
    <path d='M681.19,113.2,728,73.6h8.2l-47.8,40.2,47.8,46.2H728l-46.8-45.2V160h-6.6V40h6.6Z'
    transform='translate(-13.4 -37.23)' />

    <line x1='1195.09' y1='6' x2='1195.09' y2='18.1' stroke='#fbb03b' strokeMiterlimit='10'
    />
    <line x1='1218.06' y1='10.06' x2='1213.27' y2='21.18' stroke='#fbb03b'
    strokeMiterlimit='10' />
    <line x1='1236.63' y1='20.1' x2='1229.01' y2='29.51' stroke='#fbb03b'
    strokeMiterlimit='10' />
    <line x1='1241.14' y1='43.89' x2='1251.48' y2='37.61' stroke='#fbb03b'
    strokeMiterlimit='10' />
    <line x1='1173.03' y1='10.06' x2='1177.82' y2='21.18' stroke='#fbb03b'
    strokeMiterlimit='10' />
    <line x1='1154.34' y1='20.1' x2='1161.96' y2='29.51' stroke='#fbb03b'
    strokeMiterlimit='10' />
    <line x1='1150.37' y1='43.89' x2='1140.02' y2='37.61' stroke='#fbb03b'
    strokeMiterlimit='10' />
</svg>

  );
}
