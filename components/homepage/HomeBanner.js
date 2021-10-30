import React from 'react';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <div className="p-5">
      <p
        className="font-size-display1 mt-5 text-center mx-auto text-uppercase"
        style={{ maxWidth: '53rem' }}
      >
          Transformamos madera en belleza, en muebles y diseños que harán del interior de tu casa, negocio u oficina la envidia de quien los vea.      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/about">
          <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
            <p className="mr-3">Conoce más sobre nosotros</p>
            <img src="/icon/arrow-long-right.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
}
