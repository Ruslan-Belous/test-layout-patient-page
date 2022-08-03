<template>
	<header class="header">
		<div class="header__home container">
			<h1>ПРОФІЛЬ ЛІКАРЯ</h1>
		</div>
	</header>
</template>

<script>
export default {
	name: 'the-header'
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	padding: 10px 15px;
	background-color: #07567e;
	box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.1);
	&__home {
		display: flex;
		align-items: center;
		justify-content: center;
		h1 {
			color: #fff;
		}
	}
}
</style>
