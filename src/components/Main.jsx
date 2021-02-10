import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import Theme from '../theme'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: Theme.colors.mainBackground
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;