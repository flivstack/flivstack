import { PageProps as InertiaPageProps } from '@inertiajs/core'
import ziggyRoute from 'ziggy-js'
import { PageProps as AppPageProps } from './'

declare global {
    var route: typeof ziggyRoute
}

declare module 'vue' {
    interface ComponentCustomProperties {
        route: typeof ziggyRoute
    }
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
