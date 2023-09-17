import { ModuleOptions } from '../module'
import { Check, Settings, RequiredOptions } from '../entities/pixelSettings'

export class FbMePixel {
  constructor(private options: ModuleOptions) {
    this.options = options
    if (typeof window !== 'undefined') {
      this.init()
    }
  }
  private init(settings: any = null) {
    if (Array.isArray(this.options.pixelId)) {
      this.options.pixelId.forEach((id) => {
        window.fbq('init', id, settings)
      })
    } else {
      window.fbq('init', this.options.pixelId, settings)
    }

    console.log(this.options.pixelId)
  }
  track<T extends keyof Settings>(
    pixelCmd: T,
    ...settings: Check<T> extends RequiredOptions ? Check<T> : [Settings[T]]
  ): void {
    if (typeof window !== 'undefined') {
      window.fbq('track', pixelCmd, settings)
    }
  }
}
