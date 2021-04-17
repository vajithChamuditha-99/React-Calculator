import React from 'react';
import { Container, Screen, Previous, Current, Button } from './styled'

export default function Calculator(){
    return(
        <div>
            <Container>
                <Screen>
                    <Previous></Previous>
                    <Current></Current>
                </Screen>
                <Button gridSpan={2}>AC</Button>
                <Button></Button>
                <Button operation></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button operation></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button operation></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button operation></Button>
                <Button></Button>
                <Button></Button>
                <Button gridSpan={2}></Button>
            </Container>
        </div>
    )
} 