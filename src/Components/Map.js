import React, { useState } from 'react';
import Tile from './Tile.js';
import Player from './Player.js';
import '../Styles/Map.css';

const Map = () => {
  const [tileGrid, setTileGrid] = useState([]);
  const tileNumbers = [];
  for (let i = 0; i < 225; i++) {
    if (i < 15) {
      tileNumbers.push(`a-${i + 1}`)
    } else if ( i >= 15 && i < 30) {
      tileNumbers.push(`b-${i - 14}`)
    } else if ( i >= 30 && i < 45) {
      tileNumbers.push(`c-${i - 29}`)
    } else if ( i >= 45 && i < 60) {
      tileNumbers.push(`d-${i - 44}`)
    } else if ( i >= 60 && i < 75) {
      tileNumbers.push(`e-${i - 59}`)
    } else if ( i >= 75 && i < 90) {
      tileNumbers.push(`f-${i - 74}`)
    } else if ( i >= 90 && i < 105) {
      tileNumbers.push(`g-${i - 89}`)
    } else if ( i >= 105 && i < 120) {
      tileNumbers.push(`h-${i - 104}`)
    } else if ( i >= 120 && i < 135) {
      tileNumbers.push(`i-${i - 119}`)
    } else if ( i >= 135 && i < 150) {
      tileNumbers.push(`j-${i - 134}`)
    } else if ( i >= 150 && i < 165) {
      tileNumbers.push(`k-${i - 149}`)
    } else if ( i >= 165 && i < 180) {
      tileNumbers.push(`l-${i - 164}`)
    } else if ( i >= 180 && i < 195) {
      tileNumbers.push(`m-${i - 179}`)
    } else if ( i >= 195 && i < 210) {
      tileNumbers.push(`n-${i - 194}`)
    } else if ( i >= 210 && i < 225) {
      tileNumbers.push(`o-${i - 209}`)
    }
  }

  const tiles = tileNumbers.map( tile => {
    return <Tile className={tile} key={Math.random()} />
  })

  const [
    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15,
    b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15,
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
    d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15,
    e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15,
    f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15,
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15,
    h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15,
    i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15,
    j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12, j13, j14, j15,
    k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15,
    l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15,
    m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15,
    n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15,
    o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15,
  ] = tiles;

  const aTiles = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15];
  const bTiles = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15];
  const cTiles = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15];
  const dTiles = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15];
  const eTiles = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15];
  const fTiles = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15];
  const gTiles = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15];
  const hTiles = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15];
  const iTiles = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15];
  const jTiles = [j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12, j13, j14, j15];
  const kTiles = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15];
  const lTiles = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15];
  const mTiles = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15];
  const nTiles = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15];
  const oTiles = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15];

  return (
    <section className="game-container">
      <div className="tile-grid">
        <div className="tiles">
          <div className="a-tiles">{aTiles}</div>
          <div className="b-tiles">{bTiles}</div>
          <div className="c-tiles">{cTiles}</div>
          <div className="d-tiles">{dTiles}</div>
          <div className="e-tiles">{eTiles}</div>
          <div className="f-tiles">{fTiles}</div>
          <div className="g-tiles">{gTiles}</div>
          <div className="h-tiles">{hTiles}</div>
          <div className="i-tiles">{iTiles}</div>
          <div className="j-tiles">{jTiles}</div>
          <div className="k-tiles">{kTiles}</div>
          <div className="l-tiles">{lTiles}</div>
          <div className="m-tiles">{mTiles}</div>
          <div className="n-tiles">{nTiles}</div>
          <div className="o-tiles">{oTiles}</div>
        </div>
      </div>
    </section>
  )
}

export default Map;
