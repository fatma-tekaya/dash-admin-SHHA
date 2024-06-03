// ** Icon imports
import Table from 'mdi-material-ui/Table'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountGroup from 'mdi-material-ui/AccountGroupOutline'

const navigation = () => {
  return [
    {
      sectionTitle: 'Dashboard'
    },
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Gestion des utilisateurs'
    },
    {
      title: 'Users',
      icon: AccountGroup,
      path: '/cards'
    },
   
    {
      sectionTitle: 'Profil'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
   
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    
 
   
  ]
}

export default navigation
