import { writeFileSync } from 'fs'
import download from 'download'

download(
	'https://projects.invisionapp.com/dsm-export/stelo/landing-page/_style-params.scss?key=SyIdJUAuS'
).then(data => {
	writeFileSync('./src/styles/_style-params.scss', data)
})
