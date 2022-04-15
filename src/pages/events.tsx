import React from "react"
import { PageProps, graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import moment from "moment"
import { EventPageQuery } from "graphql-types"
import {
    Container,
    Grid,
} from "@material-ui/core"
// Components
import SEO from "components/seo"
import Section from "components/PageLayout/Section"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"
import ButtonLink from "components/Button/ButtonLink"
import EventsGrid from "components/Events/EventsGrid"
import { RaisedImage } from "components/Image"

// Hooks
import useEvents from "hooks/useEvents"
import {
    getFutureEventsFunc,
    getPastEventsFunc,
    onlyPinnedEvents,
    removePinnedEvents,
} from "utils/eventUtils"

const styles = (theme: Theme) =>
    createStyles({
        margin: { margin: theme.spacing(2) },
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: EventPageQuery
    }

function EventPage(props: Props) {
    const { data, classes } = props
    const { background, pic1} = data

    if (!background) throw new Error("Events background does not exist.")

    const currentTime = moment()
    const events = useEvents({})
    const importantEvents = events.filter(onlyPinnedEvents)
    const futureEvents = events.filter(getFutureEventsFunc(currentTime))
    const pastEvents = events
        .filter(getPastEventsFunc(currentTime))
        .filter(removePinnedEvents)

    return (
        <>
            <SEO title="Events" />
            <ParallaxBackground image={background} imageHeight={"65vh"}>
                <Text variant="h3" color="white" align="center">
                    Program
                </Text>
            </ParallaxBackground>
            <PageContent>
                <Section title="7:00 PM" maxWidth="lg">
                </Section>
                <Section title="Night Market Starts" maxWidth="lg">
                </Section>
                <Section title="7:30 PM" maxWidth="lg">
                </Section>
                <Section title="Independent Performers - kpop dance" maxWidth="lg">
                </Section>
                <Section title="7:35 PM" maxWidth="lg">
                </Section>
                <Section title="Independent Performers - kpop dance" maxWidth="lg">
                </Section>
                <Section title="7:40 PM" maxWidth="lg">
                </Section>
                <Section title="Mudit Mathur - guitar PM" maxWidth="lg">
                </Section>
                <Section title="7:45 PM" maxWidth="lg">
                </Section>
                <Section title="Pravas Dhakal - Rap" maxWidth="lg">
                </Section>
                <Section title="7:50 PM" maxWidth="lg">
                </Section>
                <Section title="Ganji - kpop dance" maxWidth="lg">
                </Section>
                <Section title="8:00 PM" maxWidth="lg">
                </Section>
                <Section title="Infinit Diabolo - Chinese Yo-yo" maxWidth="lg">
                </Section>
                <Section title="8:10 PM" maxWidth="lg">
                </Section>
                <Section title="Terp Wushu - Wushu" maxWidth="lg">
                </Section>
                <Section title="8:20 PM" maxWidth="lg">
                </Section>
                <Section title="Tianyi - Traditional Dance" maxWidth="lg">
                </Section>
                <Section title="8:30 PM" maxWidth="lg">
                </Section>
                <Section title="GGWB - kpop dance" maxWidth="lg">
                </Section>
                <Section title="10:00 PM" maxWidth="lg">
                </Section>
                <Section title="Night Market Ends and Clean Up" maxWidth="lg">
                </Section>
                {/* <Section title="Big/Little System" maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <RaisedImage
                                imageNode={pic1}
                                alt="programming"
                            />
                        </Grid>
                    </Grid>
                    </Section> */}
                

            </PageContent>
            {/* <SEO title="Events" />
            <ParallaxBackground image={background}>
                
            </ParallaxBackground> */}

        </>
    )
}

export const query = graphql`
    query EventPage {
        background: file(relativePath: { eq: "events.jpg" }) {
            ...BackgroundImage
        }
        pic1: file(relativePath: { eq: "programming.png" }) {
            ...RaisedImage
        }
    }
`

export default withStyles(styles)(EventPage)
