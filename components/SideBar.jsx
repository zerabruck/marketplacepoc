import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import { useRouter } from "next/navigation";
import { AppProvider } from '@toolpad/core/AppProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
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
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Account',
  },
  {
    segment: 'dashboard',
    title: 'Security',
    icon: <SecurityTwoToneIcon />,
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
        <PageContainer pathname={router.pathname}>
          
        {props.children}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
    </AppRouterCacheProvider>
  );
}
