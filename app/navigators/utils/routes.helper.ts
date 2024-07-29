// import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigationProp } from "@react-navigation/drawer"
import {
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
  StackActions,
} from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StackParamListType } from "../../routes/routes.types"

type NavigationProps<T extends keyof StackParamListType> = {
  navigation: StackNavigationProp<StackParamListType, T> & DrawerNavigationProp<StackParamListType>
}

type NavigateProps = {
  (routeName: keyof StackParamListType, params?: StackParamListType[keyof StackParamListType]): void
}
//(routeName: keyof StackParamListType, params?: StackParamListType[keyof StackParamListType])

class NavigationUtils {
  private static navigationRef: NavigationContainerRef<StackParamListType> | null = null

  static setNavigationReference(ref: NavigationContainerRef<StackParamListType>): void {
    NavigationUtils.navigationRef = ref
  }

  static navigate: NavigateProps = (routeName, params) => {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.navigate(routeName, params)
    }
  }

  static reset: NavigateProps = (routeName, params) => {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName, params }],
        }),
      )
    }
  }

  static replace: NavigateProps = (routeName, params) => {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(StackActions.replace(routeName, params))
    }
  }

  static goBack(): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.goBack()
    }
  }

  static push<T extends keyof StackParamListType>(
    routeName: T,
    params?: StackParamListType[T],
  ): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(CommonActions.navigate(routeName, params))
    }
  }

  static pop(): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(CommonActions.goBack())
    }
  }

  static popToTop(): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(CommonActions.popToTop())
    }
  }

  static getParam<T extends keyof StackParamListType>(
    paramName: string,
    defaultValue?: StackParamListType[T],
  ): StackParamListType[T] | undefined {
    const currentRoute = NavigationUtils.navigationRef?.getCurrentRoute()

    if (currentRoute && paramName in currentRoute.params) {
      return currentRoute.params[paramName] as StackParamListType[T]
    }

    return defaultValue
  }

  static setParams<T extends keyof StackParamListType>(
    params: Partial<StackParamListType[T]>,
  ): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.setParams(params)
    }
  }

  static addListener<T extends keyof StackParamListType>(
    event: "focus" | "blur",
    callback: (props: NavigationProps<T>) => void,
  ): (() => void) | undefined {
    return NavigationUtils.navigationRef?.addListener(event, callback)
  }

  static openDrawer(): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(DrawerActions.openDrawer())
    }
  }

  static closeDrawer(): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(DrawerActions.closeDrawer())
    }
  }

  static toggleDrawer(): void {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(DrawerActions.toggleDrawer())
    }
  }
}

export default NavigationUtils
