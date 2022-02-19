import { FC } from 'react';
import i18next from 'i18next';
import { Outlet } from 'react-router-dom';

const Public: FC<{}> = () => {
	return (
		<div className='public'>
			Public {i18next.t('test')}
			<Outlet />
		</div>
	);
};

export default Public;
