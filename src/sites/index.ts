import type { SiteConfig } from "./types"
import { vvsConfig } from "./vvs"
import { stadConfig } from "./stadfirma"
import { malareConfig } from "./malare"
import { elektrikerConfig } from "./elektriker"
import { tradgardsmastareConfig } from "./tradgardsmastare"
import { flyttfirmaConfig } from "./flyttfirma"
import { bilverkstadConfig } from "./bilverkstad"
import { dackfirmaConfig } from "./dackfirma"
import { frisorConfig } from "./frisor"
import { spaConfig } from "./spa"

/**
 * Automatiskt lägger till generalSEO-sektionen till alla site configs
 * Placerar den före contact-sektionen så att generella keywords
 * finns på alla mikrosajter utan att behöva upprepa dem
 */
const addGeneralSEO = (config: SiteConfig): SiteConfig => {
  const contactIndex = config.sections.indexOf("contact")

  if (contactIndex !== -1) {
    const newSections = [...config.sections]
    newSections.splice(contactIndex, 0, "generalSEO")

    return {
      ...config,
      sections: newSections
    }
  }

  return {
    ...config,
    sections: [...config.sections, "generalSEO"]
  }
}

const vvsWithSEO = addGeneralSEO(vvsConfig)
const stadWithSEO = addGeneralSEO(stadConfig)
const malareWithSEO = addGeneralSEO(malareConfig)
const elektrikerWithSEO = addGeneralSEO(elektrikerConfig)
const tradgardsmastareWithSEO = addGeneralSEO(tradgardsmastareConfig)
const flyttfirmaWithSEO = addGeneralSEO(flyttfirmaConfig)
const bilverkstadWithSEO = addGeneralSEO(bilverkstadConfig)
const dackfirmaWithSEO = addGeneralSEO(dackfirmaConfig)
const frisorWithSEO = addGeneralSEO(frisorConfig)
const spaWithSEO = addGeneralSEO(spaConfig)

export const siteMap: Record<string, SiteConfig> = {
  "starta-stadfirma.se": stadWithSEO,
  "starta-vvs.se": vvsWithSEO,
  "starta-elfirma.se": elektrikerWithSEO,
  "starta-tradgardsfirma.se": tradgardsmastareWithSEO,
  "starta-malerifirma.se": malareWithSEO,
  "starta-flyttfirma.se": flyttfirmaWithSEO,
  "starta-bilverkstad.se": bilverkstadWithSEO,
  "starta-dackfirma.se": dackfirmaWithSEO,
  "starta-frisor.se": frisorWithSEO,
  "starta-spa.se": spaWithSEO,
  "www.starta-stadfirma.se": stadWithSEO,
  "www.starta-vvs.se": vvsWithSEO,
  "www.starta-elfirma.se": elektrikerWithSEO,
  "www.starta-tradgardsfirma.se": tradgardsmastareWithSEO,
  "www.starta-malerifirma.se": malareWithSEO,
  "www.starta-flyttfirma.se": flyttfirmaWithSEO,
  "www.starta-bilverkstad.se": bilverkstadWithSEO,
  "www.starta-dackfirma.se": dackfirmaWithSEO,
  "www.starta-frisor.se": frisorWithSEO,
  "www.starta-spa.se": spaWithSEO,
}

export {
  vvsWithSEO as vvsConfig,
  stadWithSEO as stadConfig,
  malareWithSEO as malareConfig,
  elektrikerWithSEO as elektrikerConfig,
  tradgardsmastareWithSEO as tradgardsmastareConfig,
  flyttfirmaWithSEO as flyttfirmaConfig,
  bilverkstadWithSEO as bilverkstadConfig,
  dackfirmaWithSEO as dackfirmaConfig,
  frisorWithSEO as frisorConfig,
  spaWithSEO as spaConfig,
}
