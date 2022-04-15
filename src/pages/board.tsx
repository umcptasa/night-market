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
                        Shoot down as many cups as you can from behind the line. It costs 2 tickets for 4 bullets and you win 2 tickets if you can knock down 4 cups and 3 tickets for 5 cups and 6 tickets if you can knock down all 6 cups.
                        </Text>
                </Section>
                <Section title="Go Fish" maxWidth="lg">
                        <Text align="center" paragraph>
                        Try to scoop up as many fish as you can in your net before it breaks. It costs 3 tickets to play and scooping 5 fish earns you 1 ticket, 7 fish earns you 2 tickets, 9 fish earns you 3 tickets, and 12 fish 4 tickets.
                        </Text>
                </Section>
                <Section title="Pin the Tail of the Tiger" maxWidth="lg">
                        <Text align="center" paragraph>
                        Spin around 10 times blindfolded and try to pin the tail on the tiger as best as you can. It costs 1 ticket per turn and you get 1 ticket if you get it in the inside larger ring and 2 for the smallest ring.
                        </Text>
                </Section>
                <Section title="Trivia" maxWidth="lg">
                        <Text align="center" paragraph>
                        It costs 1 ticket to get 5 questions and getting 2/5 questions right earns you 1 ticket, 3/5 earns you 2 tickets and 4+ earns you 3 tickets.
                        </Text>
                </Section>
                <Section title="Fifteen-Fifteen" maxWidth="lg">
                        <Text align="center" paragraph>
                        Each player pays a certain amount of tickets. Each player will put down either a 0, 5, or 10 and one player will shout out what the total number will be (if you put a 5 you shouldn’t yell a 0 because it’s not possible). If they guess correctly they must guess the next one right and then they will win. If they get it wrong the next player will guess. The winner takes all the tickets.
                        </Text>
                </Section>
                <Section title="Finding Nemo" maxWidth="lg">
                        <Text align="center" paragraph>
                        Use chopsticks to pick out as many fish as you can in 30 seconds. It costs 1 ticket for the 25 seconds and for every 3 fish you get 2 tickets.
                        </Text>
                </Section>
                <Section title="Wounded Horse Derby (3-legged race)" maxWidth="lg">
                        <Text align="center" paragraph>
                        Win the race! Each player puts a certain amount of tickets into the pool and winner wins all tickets in the pool.
                        </Text>
                </Section>
                <Section title="Ring Toss" maxWidth="lg">
                        <Text align="center" paragraph>
                        Toss rings onto the bottles from behind the line. Costs 1 ticket for 5 rings and you earn 2 tickets for one bottle and 3 tickets for 3 bottles.
                        </Text>
                </Section>
                <Section title="Cup Pong" maxWidth="lg">
                        <Text align="center" paragraph>
                        Throw the ping pong balls into the cup. It costs 2 tickets for 4 ping pong balls and you earn a ticket for every cup you get.
                        </Text>
                </Section>
                <Section title="Shuttlecock" maxWidth="lg">
                        <Text align="center" paragraph>
                        Keep the shuttlecock in the air as long as you can by kicking it with our feet and legs (no hands, arms, or heads). It costs 1 ticket to play 3 turns and we will take the highest score. 4 kicks earns you 1 ticket, 8 kicks 2 tickets, 15+ kicks 3 tickets.
                        </Text>
                </Section>
                <Section title="Ddakji" maxWidth="lg">
                        <Text align="center" paragraph>
                        Flip over the square on the ground by throwing your square at it. It costs 1 ticket for 2 tries and the tickets used for the game goes into a pool. If you win you get the whole pool of tickets. 
                        </Text>
                </Section>
                <Section title="Plinko" maxWidth="lg">
                        <Text align="center" paragraph>
                            Plinko costs 2 tickets for 4 balls. You roll a golf ball along a path and depending on what cup you get the ball in you will earn the amount of tickets written on the bottom of the cup.
                        </Text>
                </Section>
                <Section title="石头剪刀布(Rock paper scissors)" maxWidth="lg">
                        <Text align="center" paragraph>
                        Each player pays a certain amount of tickets to play and will stand on a newspaper each. Loser folds the newspaper in half and if more than half their shoe is off the newspaper they lose. Winner takes both tickets.                        </Text>
                </Section>
                <Section title="Popcorn Chicken - 4 Tickets" maxWidth="lg">
                </Section>
                <Section title="Minced Pork on Rice - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Beef Noodle Soup - 4 Tickets" maxWidth="lg">
                </Section>
                <Section title="Fried Bean Curd (V) - 1 Ticket" maxWidth="lg">
                </Section>
                <Section title="Dumplings - 1 Tickets" maxWidth="lg">
                </Section>
                <Section title="Taiwanese Lo Mein - 3 Tickets" maxWidth="lg">
                </Section>
                <Section title="Fried Tempura - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Scallion Pancakes (V) - 1 Ticket" maxWidth="lg">
                </Section>
                <Section title="Vegetable Fried Rice (V) - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Shaved Ice - 3 Tickets" maxWidth="lg">
                </Section>
                <Section title="Red Bean Cake - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Tanghulu - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Lemon Aiyu - 1 Ticket" maxWidth="lg">
                </Section>
                <Section title="Bubble Tea - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Three Cup Tofu - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Tea Egg - 1 Ticket" maxWidth="lg">
                </Section>
                <Section title="Fried Rice - 2 Tickets" maxWidth="lg">
                </Section>
                <Section title="Braised Noodles - 3 Tickets" maxWidth="lg">
                </Section>
                <Section title="Poke Lottery" maxWidth="lg">
                        <Text align="center" paragraph>
                            Pay two tickets to choose a poket and rip the paper and take out a prize (can only play 5 times). Prizes include 1 ticket, 2 tickets, 3 tickets, 5 tickets, 10 tickets, food vouchers, and sticky hands.
                        </Text>
                </Section>
                <Section title="Merch Decorating" maxWidth="lg">
                        <Text align="center" paragraph>
                            Pay three tickets for a tote bag and you can decorate it.
                        </Text>
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
