import Head from 'next/head'

import { request } from '../lib/datocms'

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

import Icon from '../components/Icon/Icon'

const QUERY = `query MyQuery {
  contactmodel {
    contactblock {
      contactItem {
        category
        title
      }
    }
  }
  menu {
    menu {
      menulink {
        title
        link
      }
    }
  }
  footermenu {
    footermenu {
      footermenulink {
        title
        link
      }
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: QUERY,
  })

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Administratiekantoor Tirza van Ollefen</title>
      </Head>

      <AppHeader data={data} />

      {/* contactData={data.contactmodel.contactblock} */}

      <main>
        <h1>Administratiekantoor Tirza van Ollefen</h1>

        {/* foto */}

        <div>{/* lees over tirza */}</div>

        <div>
          {/* logo/icon */}
          <h2>financiele administratie</h2>
          <p>toelichting</p>
          {/* button: lees meer */}
        </div>

        <div>
          {/* logo/icon */}
          <h2>fiscale aangiften</h2>
          <p>toelichting</p>
          {/* button: lees meer */}
        </div>

        <div>
          {/* logo/icon */}
          <h2>jaarrekeningen</h2>
          <p> toelichting </p>
          {/* button: lees meer */}
        </div>

        <div>
          {/* logo/icon */}
          <h2> voor bedrijven en ondernemingen </h2>
          <p> toelichting </p>
          {/* button: lees meer */}
        </div>

        <div>
          {/* logo/icon */}
          <h2> voor particulieren </h2>
          <p> toelichting </p>
          {/* button: lees meer */}
        </div>

        <div>
          <h3>wat ik bied </h3>
          <ul>
            <li>iets</li>
            <li>nog iets</li>
            <li>nog eentje dan</li>
          </ul>
        </div>

        <div>
          <h2> testimonials </h2>
          <div>
            {/* sterren */}
            <h3>titel</h3>
            <p>tekstje</p>
            <div>
              {/* foto van persoon */}
              <p>naam</p>
              <p>bedrijf</p>
            </div>
          </div>
        </div>
      </main>

      <AppFooter data={data} />
    </div>
  )
}
