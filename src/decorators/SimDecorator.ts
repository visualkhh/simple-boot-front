import {ConstructorType, GenericClassDecorator} from '../types/Types'
import {simstanceManager} from '../simstance/SimstanceManager'

export interface SimConfig {
    scheme: string,
}

export const Sim = (config?: SimConfig): GenericClassDecorator<ConstructorType<any>> => {
    return (target: ConstructorType<any>) => {
        // console.log('sim reg', config)
        simstanceManager.register(target, config)
        // console.log('sim reged')
    }
}
