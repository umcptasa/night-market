import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Hidden,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { BoardPageQuery } from "graphql-types"

import SEO from "components/seo"
import useBios from "hooks/useBios"
import BioGrid from "components/Bios/BioGrid"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        grid: {},
        gridItem: {},
    })

type Props = WithStyles<typeof styles> &
    PageProps & {
        data: BoardPageQuery
    }

function BoardPage(props: Props) {
    const { data, classes } = props
    const { background } = data
    if (!background) throw new Error("Board background does not exist.")

    const bios = useBios()
    const presidents = bios.slice(0, 2)
    const rest = bios.slice(2)

    return (
        <>
            <SEO title="Board" />
            <ParallaxBackground image={background}>
                <Text variant="h3" color="white" align="center" paragraph>
                    Tickets
                </Text>
            </ParallaxBackground>
            <PageContent>
            <Section title="Ticket System" maxWidth="lg">
                        <Text align="center" paragraph>
                            $3 for 3; $5 for 6; $10 for 13
                        </Text>
                </Section>
                <Section title="Boba Blast" maxWidth="lg">
                        <Text align="center" paragraph>
                        Shoot down as many cups as you can from behind the line. It costs 3 tickets for 5 bullets and you win 5 tickets if you can knock down 5 cups and 6 tickets if you can knock down all 6 cups.
                        </Text>
                </Section>
                <Section title="Go Fish" maxWidth="lg">
                        <Text align="center" paragraph>
                        Try to scoop up as many fish as you can in your net before it breaks. It costs 3 tickets to play and scooping 8 fish earns you 4 tickets, 10 fish 5 tickets, and 12 fish 6 tickets. Pin the tail on 
                        </Text>
                </Section>
                <Section title="Pin the Tail of the Tiger" maxWidth="lg">
                        <Text align="center" paragraph>
                        Spin around 10 times blindfolded and try to pin the tail on the tiger as best as you can. It costs 1 ticket per turn and you get 1 ticket if you get it in the third ring, 2 for the middle ring, and 3 tickets for the smallest ring.
                        </Text>
                </Section>
                <Section title="Trivia" maxWidth="lg">
                        <Text align="center" paragraph>
                        It costs 1 ticket to get 5 questions and getting 2/5 questions right earns you 1 ticket, 3/5 earns you 2 tickets and 5/5 earns you 3 tickets.
                        </Text>
                </Section>
                <Section title="Fifteen-Fifteen" maxWidth="lg">
                        <Text align="center" paragraph>
                        Each player pays one ticket to play. Each player will put down either a 0, 5, or 10 and one player will shout out what the total number will be (if you put a 5 you shouldn’t yell a 0 because it’s not possible). If they guess correctly they must guess the next one right and then they will win. If they get it wrong the next player will guess. The winner takes both tickets.
                        </Text>
                </Section>
                <Section title="Finding Nemo" maxWidth="lg">
                        <Text align="center" paragraph>
                        Use chopsticks to pick out as many fish as you can in 30 seconds. It costs 2 tickets for the 30 seconds and you earn a ticket for every fish you pick out.
                        </Text>
                </Section>
                <Section title="Wounded Horse Derby (3-legged race)" maxWidth="lg">
                        <Text align="center" paragraph>
                        Win the race! Each player puts 2 tickets into the pool and winner wins all 8 tickets in the pool.
                        </Text>
                </Section>
                <Section title="Ring Toss" maxWidth="lg">
                        <Text align="center" paragraph>
                        Toss rings onto the bottles from behind the line. Costs 2 tickets for 5 rings and you earn 1 ticket for every bottle you get.                         </Text>
                </Section>
                <Section title="Cup Pong" maxWidth="lg">
                        <Text align="center" paragraph>
                        Throw the ping pong balls into the cup. It costs 3 tickets for 4 ping pong balls and you earn a ticket for every cup you get. Extra 3 tickets if you make all 4 balls!
                        </Text>
                </Section>
                <Section title="Shuttlecock" maxWidth="lg">
                        <Text align="center" paragraph>
                        Keep the shuttlecock in the air as long as you can by kicking it with our feet and legs (no hands, arms, or heads). It costs 1 ticket to play 3 turns and we will take the highest score. 3 kicks earns you 1 ticket, 6 kicks 2 tickets, 10+ 3 tickets.
                        </Text>
                </Section>
                <Section title="Ddakji" maxWidth="lg">
                        <Text align="center" paragraph>
                        Flip over the square on the ground by throwing your square at it. It costs 1 ticket for 5 tries and the tickets used for the game goes into a pool. If you win you get the whole pool of tickets. 
                        </Text>
                </Section>
                <Section title="Plinko" maxWidth="lg">
                        <Text align="center" paragraph>
                            Plinko costs 1 ticket to play. You roll a golf ball along a path and depending on what cup you get the ball in you will 
                        </Text>
                </Section>
                <Section title="石头剪刀布(Rock paper scissors)" maxWidth="lg">
                        <Text align="center" paragraph>
                        Each player pays a ticket to play and will stand on a newspaper each. Loser folds the newspaper in half and if more than half their shoe is off the newspaper they lose. Winner takes both tickets.                        </Text>
                </Section>
            </PageContent>


        </>
    )
}

export const query = graphql`
    query BoardPage {
        background: file(relativePath: { eq: "events.jpg" }) {
            ...BackgroundImage
        }
    }
`
export default withStyles(styles)(BoardPage)
