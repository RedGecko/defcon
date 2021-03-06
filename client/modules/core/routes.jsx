import {mount} from 'react-mounter';
import React from 'react';

import {LayoutDefault} from '/client/configs/theme.jsx';
import { Accounts }    from './components/accounts.jsx';
import Home            from './components/home.jsx';

export default function(injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home/>)
      });
    }
  });

  FlowRouter.route("/login", {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });

  FlowRouter.route("/account", {
    name: 'account',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });

  FlowRouter.route("/logout", {
    name: 'logout',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });
}
