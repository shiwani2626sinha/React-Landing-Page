import React from 'react'
import { Component, Wrapper, SubHeader, Header, PlaceHolderImage, Text, Item } from '../Middle/Components';

const Right = () => (
    <Component>
        <Wrapper row>
            <div center mr>
                <PlaceHolderImage></PlaceHolderImage>
                <Text>
                     SuperHero To-Do List allows you to work with
                     unique features not found in any other To-Do List.
                     You'll really always be locked in to perform your task
                </Text>
            </div>
            <div>
                <SubHeader>Incredible Features</SubHeader>
                <Header>Universal app to manage your task</Header>
            </div>
        </Wrapper>
    </Component>
)

export default Right;