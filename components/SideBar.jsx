import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import Chip from '@mui/material/Chip';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";
import { AppProvider } from '@toolpad/core/AppProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ViewListIcon from '@mui/icons-material/ViewList';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'chat',
    title: 'Chats',
    icon: <ChatBubbleOutlineTwoToneIcon />,
    action: <Chip label={2} color="primary" size="small" />,
  },
  {
    segment: 'opportunity',
    title: 'Opportunities',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'listed',
        title: 'Listed Opportunities',
        icon: <ViewListIcon />,
      },
      {
        segment: 'linked',
        title: 'Linked Opportunities',
        icon: <LeakAddIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Account',
  },
  {
    segment: 'account',
    title: 'Account',
    icon: <AccountCircleIcon />,
  },
  {
    segment: 'landing',
    title: 'Logout',
    icon: <LogoutTwoToneIcon />,
  },
  // {
  //   segment: 'account',
  //   title: 'Account',
  //   icon: <PersonIcon />,
  //   children: [
  //     {
  //       segment: 'security',
  //       title: 'Security',
  //       icon: <SecurityTwoToneIcon />,
  //     },
  //     {
  //       segment: 'logout',
  //       title: 'Logout',
  //       icon: <LogoutTwoToneIcon />,
  //     },
  //   ],
  // }
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: false },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function SideBar(props) {
  const { window, path } = props;

  // const router = useDemoRouter(`/${path}`);
  const router = useRouter();

  console.log(router);


  return (
    <AppRouterCacheProvider  >
    <AppProvider
      navigation={NAVIGATION}
      // router={router}
      theme={demoTheme}
      branding={{ 
        // src="./assets/logo/logo.png"
        logo: <div><img src="./assets/logo/logo.png" alt="MUI logo" className='w-[30px] h-fit'  /></div> ,
        title: '',
      }}
    >
      <DashboardLayout>
        <PageContainer className='' pathname={router.pathname}>
          
        {props.children}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
    </AppRouterCacheProvider>
  );
}
