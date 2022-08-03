<template>
	<button class="btn" @click="btnAction" :class="className">
		<fa :icon="prependBtnIcon" v-if="prependBtnIcon" class="btn__icon" />
		{{ btnTitle }}
		<fa :icon="appendBtnIcon" v-if="appendBtnIcon" class="btn__icon" />
	</button>
</template>

<script>
export default {
	name: 'custom-btn',
	props: {
		btnTitle: {
			type: String,
			default: 'press'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		secondary: {
			type: Boolean,
			default: false
		},
		primary: {
			type: Boolean,
			default: false
		},
		appendBtnIcon: {
			type: String,
			default: ''
		},
		prependBtnIcon: {
			type: String,
			default: ''
		}
	},
	computed: {
		className() {
			return {
				btn__disabled: this.disabled,
				btn__primary: this.primary,
				btn__secondary: this.secondary
			};
		}
	},
	methods: {
		btnAction() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss">
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: #fff;
	background-color: lightcoral;
	padding: 10px 15px;
	border-radius: 10px;
	transition: 0.4s;
	cursor: pointer;
	&__primary {
		background-color: #305bf3;
	}
	&__secondary {
		background-color: #496583;
	}
	&__disabled {
		background-color: #cccccc;
		color: #666666;
		cursor: not-allowed;
		pointer-events: none;
	}
	&__icon {
		margin: 0 8px;
		font-size: 16px;
	}
}
</style>
