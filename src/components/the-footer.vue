<template>
	<footer class="footer">
		<div class="footer__home container">
			<h1>ПРОФІЛЬ ЛІКАРЯ</h1>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'the-footer'
};
</script>

<style lang="scss" scoped>
.footer {
	padding: 10px 15px;
	background-color: #07567e;
	box-shadow: 6px 0 0 rgba($color: #000000, $alpha: 0.1);
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
