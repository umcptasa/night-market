import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { ArchivePageQuery } from "graphql-types"

// Components
import SEO from "components/seo"
import Section from "components/PageLayout/Section"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"
import ArchiveSection from "components/Archive/ArchiveSection"

const styles = (theme: Theme) => createStyles({})

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: ArchivePageQuery
    }

function ArchivePage(props: Props) {
    const { data, classes } = props
    const { background } = data

    if (!background) throw new Error("Archive background does not exist.")

    return (
        <>
            <SEO title="Parking" />
            <ParallaxBackground image={background}>
            </ParallaxBackground>
            <PageContent>
                <Section title= <a href="https://transportation.umd.edu/parking/maps/umd-campus-parking-map">Full Map</a> maxWidth="lg">
                </Section>

            </PageContent>
        </>
    )
}

export const query = graphql`
    query ArchivePage {
        background: file(relativePath: { eq: "parking.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(ArchivePage)
