interface Other {
  readonly name: string;
  readonly value: string;
  readonly branches?: boolean;
}

interface BundlerTemplate {
  readonly parcel: string | null;
  readonly rollup_default_template: string | null;
  readonly rollup_introduction_template: string | null;
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
      rollup_default_template: null,
      rollup_introduction_template: null,
      webpack: null
    },
    template: {
      parcel: 'https://github.com/visualkhh/simple-boot-front/templates/parcel-bundler#master',
      rollup_default_template: 'https://github.com/visualkhh/simple-boot-front/templates/rollup#master',
      rollup_introduction_template: 'https://github.com/visualkhh/simple-boot-front/introduction#master',
      webpack: null
    }
  }
];

export default TemplateOptions;
