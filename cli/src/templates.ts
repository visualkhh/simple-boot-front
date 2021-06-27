interface Other {
  readonly name: string;
  readonly value: string;
  readonly branches?: boolean;
}

interface BundlerTemplate {
  readonly parcel: string | null;
  readonly rollup: string | null;
  readonly webpack: string | null;
  readonly other?: Other[];
}

export interface TemplateOption {
  readonly name: string;
  readonly template:  BundlerTemplate;
  readonly port: BundlerTemplate;
}

const TemplateOptions: TemplateOption[] = [
  {
    name: 'simple-boot-front',
    port: {
      parcel: '3000',
      rollup: null,
      webpack: null
    },
    template: {
      parcel: 'https://github.com/visualkhh/simple-boot-front/templates/parcel-bundler#master',
      rollup: null,
      webpack: null
    }
  }
];

export default TemplateOptions;
