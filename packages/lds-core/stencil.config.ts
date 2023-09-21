import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'lds-core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'single-export-module',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
  ],
  extras: {
    experimentalImportInjection: true,
  },
};
