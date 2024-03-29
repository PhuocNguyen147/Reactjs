export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [

            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },

                // ]
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux',

            },
            //quản lý kế hoạch khám bệnh

            {
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'

            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin',

            },
            {
                name: 'menu.admin.crud', link: '/system/user-manage',

            },

        ]
    },
    {//quản lý phòng khám
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/user-doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },

                // ]
            },




        ]
    },
    {//quản lý chi nhánh
        name: 'menu.admin.branch',
        menus: [
            {
                name: 'menu.admin.manage-branch', link: '/system/user-doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },

                // ]
            },




        ]
    },
    {//quản lý chi nhánh
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/user-doctor'

            },




        ]
    }
];
export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [

            {//quản lý kế hoạch khám bệnh
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
            {//quản lý bệnh nhân khám bệnh
                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'
            },
        ]
    }
];