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
    name: 'Svelte',
    port: {
      parcel: '5000',
      rollup: null,
      webpack: null
    },
    template: {
      parcel: 'https://github.com/sveltejs/template#master',
      rollup: null,
      webpack: null
    }
  }
];

export default TemplateOptions;
