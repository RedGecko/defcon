AuthenticatedNavigation = React.createClass({
    getMeteorData: function() {
      return {
        currentUser: Meteor.user(),
      };
    },
    currentUserEmail: function() {
        return Meteor.user().emails[0].address;
    },
    renderIncidentMenu: function() {
        if (Session.get('incident')){
            return (
                <li className={FlowHelpers.currentRoute( 'incidentEditor' )}>
                    <a href={FlowHelpers.pathFor( 'incidentEditor', {incident: Session.get('incident')} )}>
                        <i className="fa fa-lg fa-ambulance"></i>&nbsp; Ereignisse
                    </a>
                </li>
            );
        }
        else {
            return (
                <li className={FlowHelpers.currentRoute( 'incident' )}>
                    <a href={FlowHelpers.pathFor( 'incident' )}>
                        <i className="fa fa-lg fa-ambulance"></i>&nbsp; Ereignisse
                    </a>
                </li>
            );
        }
    },
    renderJournalMenu: function() {
        if (Session.get('incident')){
            return (
                <li className={FlowHelpers.currentRoute( 'journal')}>
                    <a href={FlowHelpers.pathFor( 'journal', {incident: Session.get('incident')} )}>
                        <i className="fa fa-lg fa-bars"></i>&nbsp; Journal
                    </a>
                </li>
            );
        }
        else {
            return (
                <li className="disabled">
                    <a href={FlowHelpers.pathFor( 'incident' )}>
                        <i className="fa fa-lg fa-bars"></i>&nbsp; Journal
                    </a>
                </li>
            );
        }
    },
    renderTaskMenu: function(){
        return (
            <li className="disabled">
                <a href={FlowHelpers.pathFor( 'incident' )}>
                    <i className="fa fa-lg fa-check-square-o"></i>&nbsp; Pendenzen
                </a>
            </li>
        );
    },
    renderForcesMenu: function(){
        return (
            <li className="disabled">
                <a href={FlowHelpers.pathFor( 'incident' )}>
                    <i className="fa fa-lg fa-male"></i>&nbsp; Mitteltablle
                </a>
            </li>
        );
    },
    renderConnectionMenu: function(){
        return (
            <li className="disabled">
                <a href={FlowHelpers.pathFor( 'incident' )}>
                    <i className="fa fa-lg fa-exchange"></i>&nbsp; Verbindungen
                </a>
            </li>
        );
    },
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav">
                    {this.renderIncidentMenu()}
                    {this.renderJournalMenu()}
                    {this.renderTaskMenu()}
                    {this.renderForcesMenu()}
                    {this.renderConnectionMenu()}
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle"
                            data-toggle="dropdown">
                            <i className="fa fa-lg fa-user"></i>&nbsp; {this.currentUserEmail()}
                            <span className="caret">
                            </span>
                        </a>
                        <ul className="dropdown-menu" role="menu">
                            <li onClick={Meteor.logout}>
                                <a href={FlowHelpers.pathFor('login')}>Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});
